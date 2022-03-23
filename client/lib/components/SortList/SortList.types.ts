import { Locale } from "models";

export type SortListType = {
  cards: Locale["rounds"][0]["cards"];
};

export type SortItemType = {
  id: Locale["rounds"][0]["cards"][0]["id"];
  title: string;
};
