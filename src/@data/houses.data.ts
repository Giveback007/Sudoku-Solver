import { iterate, Obj } from "@giveback007/util-lib";
import { houseMap, houseKeys } from "../@types";
import { blocksDict } from "./app.data";

// -- /SETUP/ -- //
const n = Number;

const keys: houseKeys[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const rows = {} as houseMap;
const cols = {} as houseMap;
const blks = {} as houseMap;

keys.forEach((key) =>
    rows[key] = iterate(9).map(({ x }) => '' + key + (x + 1)));

keys.forEach((key) =>
    cols[key] = iterate(9).map(({ x }) => '' + (x + 1) + key));

Obj(blocksDict).keyVals.forEach(({ key: id, val: key }) =>
    blks[key as houseKeys] = iterate(3, 3).map(({ x, y }) => '' + (n(id[0]) + x) + (n(id[1]) + y)))
// -- /SETUP/ -- //

export const housesMap = { cols, rows, blks };
