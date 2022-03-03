export enum ViewName {
  Wizard,
  Lobby,
  Game,
  Result,
}

export interface ViewState {
  name: ViewName;
  data: ViewData;
}

export const initialViewState: ViewState = {
  name: ViewName.Wizard,
  data: {},
};

export interface ViewData {}
