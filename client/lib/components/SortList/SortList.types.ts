import { Category } from "models";

export type SortListType = {
  cards: SortItemType[];
  handleSortOrder: (items: Category[]) => void;
};

export type SortItemType = {
  id: string;
  title: string;
};
