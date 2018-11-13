import { getHouses } from ".";
import { dictionary } from "@giveback007/util-lib";
import { square, row, blk, col } from "../@types";
import { getAllNotes } from "./notes.util";
import { getSqrNotes } from "./square.util";
import { getBlk, getCol, getRow } from "./house.util";

export function Game(g: dictionary<square>) {
    return {
        houses: (id: string) => getHouses(g, id),
        row: (r: row) => getRow(g, r),
        col: (c: col) => getCol(g, c),
        blk: (b: blk) => getBlk(g, b),
        sqrNotes: (id: string) => getSqrNotes(g, id),
        allNotes: () => getAllNotes(g),
        
    }
}
