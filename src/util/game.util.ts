import { getNotes, getHouses } from ".";
import { dictionary } from "@giveback007/util-lib";
import { square } from "../@types";
import { getAllNotes } from "./notes.util";

export function Game(g: dictionary<square>) {
    return {
        houses: (id: string) => getHouses(g, id),
        notes: (id: string) => getNotes(g, id),
        allNotes: () => getAllNotes(g),
    }
}
