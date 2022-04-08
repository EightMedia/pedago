import { Category } from "../../models";

export type SortListType = {
  cards: SortItemType[];
  round: number;
  handleSortOrder: (items: Category[]) => void;
};

export type SortItemType = {
  id: string;
  title: string;
};
