import { dictionary, iterate, Obj, Arr } from "@giveback007/util-lib";
import { square, notes } from "../@types";
import { colKeys, rowKeys, blocksDict } from "../@data";
import { Game, n } from ".";

// -- /SETUP/ -- //
const colMap: dictionary<string[]> = {};
const rowMap: dictionary<string[]> = {};
const blkMap: dictionary<string[]> = {};

rowKeys.forEach((key) =>
    rowMap[key] = iterate(9).map(({ x }) => '' + key + (x + 1)));

colKeys.forEach((key) =>
    colMap[key] = iterate(9).map(({ x }) => '' + (x + 1) + key));

Obj(blocksDict).keyVals.forEach(({ key: id, val: key }) =>
    blkMap[key] = iterate(3, 3).map(({ x, y }) => '' + (n(id[0]) + x) + (n(id[1]) + y)))
// -- /SETUP/ -- //


export function getHouses(squares: dictionary<square>, id: string) {
    const { blk, col, row } = squares[id];
    
    return {
        col: colMap[col].map((id) => squares[id]),
        row: rowMap[row].map((id) => squares[id]),
        blk: blkMap[blk].map((id) => squares[id]),
    }
}
