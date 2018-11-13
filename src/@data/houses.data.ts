import { rowKeys, colKeys, blocksDict } from ".";
import { iterate, Obj } from "@giveback007/util-lib";
import { col, blk, row, houseMap } from "../@types";

// -- /SETUP/ -- //
const n = Number;

const rows = {} as houseMap;
const cols = {} as houseMap;
const blks = {} as houseMap;

rowKeys.forEach((key) =>
    rows[key] = iterate(9).map(({ x }) => '' + key + (x + 1)));

colKeys.forEach((key) =>
    cols[key] = iterate(9).map(({ x }) => '' + (x + 1) + key));

Obj(blocksDict).keyVals.forEach(({ key: id, val: key }) =>
    blks[key] = iterate(3, 3).map(({ x, y }) => '' + (n(id[0]) + x) + (n(id[1]) + y)))
// -- /SETUP/ -- //

export const housesMap = { cols, rows, blks };
