import { dictionary, Obj, } from "@giveback007/util-lib";
import { square, notes } from "../@types";
import { getSqrNotes } from ".";
import { sqrNotesInit } from "../@data/app.data";

export function reduceToNotes(sqrs: square[]) {
    return sqrs.reduce((notes, { value }): notes => {
        if (value) notes[value] = false;
        return notes;
    }, sqrNotesInit(true));
}

export function getAllNotes(squares: dictionary<square>): dictionary<notes> {
    return Obj(squares).map(({ val: { id } }) => getSqrNotes(squares, id));
}
