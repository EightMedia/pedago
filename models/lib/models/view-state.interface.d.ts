export declare enum ViewName {
    Wizard = 0,
    Lobby = 1,
    Game = 2,
    Result = 3,
    InfoScreen = 4,
    SelectGroup = 5
}
export interface ViewState {
    name: ViewName;
    data: ViewData;
}
export declare const initialViewState: ViewState;
export interface ViewData {
}
