import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { Category, Player, PlayerEvent, SocketCallback } from "models";
import { memo, useContext, useEffect, useState } from "react";
import { RoomContext } from "../../../contexts/RoomContext";
import { SocketContext } from "../../../contexts/SocketContext";
import { getPlayerId } from "../../../factories/shared.factory";
import {
  categoryToSortList,
  sortListToCategory
} from "../../utils/sortlist-conversion.util";
import { SortableItem } from "./SortableItem";
import styles from "./SortList.module.css";
import { SortItemType, SortListType } from "./SortList.types";

const SortListComponent = ({ cards, round, handleSortOrder }: SortListType) => {
  const [items, setItems] = useState<SortItemType[]>(cards);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const socket = useContext(SocketContext);
  const room = useContext(RoomContext);

  useEffect(() => {
    socket?.emit(
      PlayerEvent.SortOrder,
      room?.id,
      round,
      getPlayerId(socket.id, room?.players as Player[]),
      (res: SocketCallback) => {
        if (res?.data?.sortOrder) {
          setItems(categoryToSortList(res.data.sortOrder as Category[], cards));
        }
      }
    );
  }, []);

  useEffect(() => {
    handleSortOrder(sortListToCategory(items));
  }, [items]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className={styles.list}>
          {items?.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id.toString()}
              title={item.title}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};

export const SortList = memo(SortListComponent);
