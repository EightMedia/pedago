import { Sector } from './sector.enum';
export interface PlayersType {
    type: 'Studenten' | 'Professionals';
    leerjaar?: 1 | 2 | 3 | 4;
    sector: Sector[];
}
