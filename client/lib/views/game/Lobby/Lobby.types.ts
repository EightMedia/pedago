import { ViewName } from "models";

export type LobbyType = {
  handleEmit: (vn: ViewName) => void;
};
