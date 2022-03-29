export declare enum ViewName {
    Wizard = 0,
    Lobby = 1,
    Game = 2,
    Result = 3,
    WaitingScreen = 4,
    PlayerMatch = 5,
    Discuss = 6
}
export interface ViewState {
    name: ViewName;
    data?: ViewData;
}
export declare const initialViewState: ViewState;
export interface ViewData {
    round?: number;
}
