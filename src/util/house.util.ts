import { dictionary } from "@giveback007/util-lib";
import { square, row, col, blk, notes } from "../@types";
import { housesMap } from "../@data/houses.data";
import { reduceToNotes } from ".";
import { Game } from "./game.util";

export const house = <
    T extends dictionary<square> | dictionary<notes>
>(vals: T, ids: string[]) => ids.map(id => vals[id]) as T extends dictionary<square> ? square[] : notes[];

export const getRow = (vals: dictionary<square>, r: row) => house(vals, housesMap.rows[r]);
export const getCol = (vals: dictionary<square>, c: col) => house(vals, housesMap.cols[c]);
export const getBlk = (vals: dictionary<square>, b: blk) => house(vals, housesMap.blks[b]);

export function getHouses(squares: dictionary<square>, id: string) {
    const { blk, col, row } = squares[id];
    const game = Game(squares);
    
    return {
        row: game.row(row),
        col: game.col(col),
        blk: game.blk(blk),
    }
}

export function getHousesNotes(squares: dictionary<square>, id: string) {
    const { col, row, blk } = getHouses(squares, id);
    
    return {
        row: reduceToNotes(row),
        col: reduceToNotes(col),
        blk: reduceToNotes(blk),
    }
}
