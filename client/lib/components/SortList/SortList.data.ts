import { NL } from "../../../data/languages";
import { SortListType } from "./SortList.types";

export const SortListData: SortListType = {
  cards: NL.rounds[0].cards,
  handleSortOrder: (items) => {
    alert("We've sorted it out: " + JSON.stringify(items));
    return;
  },
};
