import { Category } from "models";
import { SortItemType } from "../components/SortList/SortList.types";

export const sortListToCategory = (items: SortItemType[]): Category[] => {
  return items.map((i) => {
    return parseInt(i.id, 10);
  });
};

export const categoryToSortList = (
  cats: Category[],
  cards: SortItemType[]
): SortItemType[] => {
  return cats.map((i) => {
    const cat = i.toString();
    return {
      id: cat,
      title: getCardTitle(cat, cards),
    };
  });
};

const getCardTitle = (id: string, cards: SortItemType[]): string => {
  return cards.find((c) => c.id === id)?.title as string;
};
