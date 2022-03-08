import { ViewName } from "models";

export type GameType = {
  handleEmit: (vn: ViewName) => void;
  mockCounter?: 0 | 7 | 10;
};
