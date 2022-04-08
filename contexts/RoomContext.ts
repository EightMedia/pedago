import { createContext } from "react";
import { RoomDto } from "./../lib/models";

export const RoomContext = createContext<RoomDto | null>(null);
