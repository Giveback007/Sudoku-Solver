import { reduceToNotes, getHouses } from ".";
import { sqrNotesInit } from "../@data";
import { dictionary } from "@giveback007/util-lib";
import { square } from "../@types";

export function getSqrNotes(squares: dictionary<square>, id: string) {
    if (squares[id].value) return sqrNotesInit(false);

    const { col, row, blk } = getHouses(squares, id);

    return reduceToNotes([ ...col, ...row, ...blk ]);
}