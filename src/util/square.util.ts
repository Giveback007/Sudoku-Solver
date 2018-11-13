import { reduceToNotes, getHouses } from ".";
import { dictionary } from "@giveback007/util-lib";
import { square } from "../@types";
import { sqrNotesInit } from "../@data/app.data";

export function getSqrNotes(squares: dictionary<square>, id: string) {
    if (squares[id].value) return sqrNotesInit(false);

    const { col, row, blk } = getHouses(squares, id);

    return reduceToNotes([ ...col, ...row, ...blk ]);
}