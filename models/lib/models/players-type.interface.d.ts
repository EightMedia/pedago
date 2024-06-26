import { PlayerType } from "./player-type.enum";
import { Sector } from "./sector.enum";
export interface Players {
    type: PlayerType;
    year?: Array<1 | 2 | 3 | 4>;
    sector: Sector[];
    customSector?: string;
    education?: string;
}
