export declare enum ViewName {
    Wizard = 0,
    Lobby = 1,
    Game = 2,
    Result = 3,
    PlayerMatch = 4,
    ChooseName = 5,
    SelectGroup = 6,
    InfoScreen = 7
}
export interface ViewState {
    name: ViewName;
    data: ViewData;
}
export declare const initialViewState: ViewState;
export interface ViewData {
}
