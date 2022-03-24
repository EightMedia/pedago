import { Category } from "models";
import { SortItemType } from "../components/SortList/SortList.types";

export const sortListToCategory = (items: SortItemType[]): Category[] => {
  return items.map((i) => {
    return parseInt(i.id, 10);
  });
};

export const categoryToSortList = (
  items: Category[],
  cards: SortItemType[]
): SortItemType[] => {
  return items.map((i) => {
    return {
      id: i.toString(),
      title: getCardTitle(i.toString(), cards),
    };
  });
};

const getCardTitle = (id: string, cards: SortItemType[]): string => {
  return cards.find((c) => c.id === id)?.title as string;
};
