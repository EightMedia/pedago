import { Organisation, PlayersType } from "./pedago-room-dto.interface";

export interface Admin {
    id: string;
    name: string;
    email: string;
    function: Function[]
    customFunction: string;
    organisation: Organisation
    playersType: PlayersType 
}
