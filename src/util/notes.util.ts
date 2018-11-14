import { dictionary, Obj, } from "@giveback007/util-lib";
import { square, notes } from "../@types";
import { getSqrNotes } from ".";
import { sqrNotesInit, nNotes } from "../@data/app.data";

/** How many of each note in the house */
export function getNumNotes(notes: notes[]) {
    const values = nNotes();

    notes.forEach((x) => 
        Obj(x).map(({ key, val }) => val ? values[key]++ : null));

    return values;
}

export function reduceToNotes(sqrs: square[]) {
    return sqrs.reduce((notes, { value }): notes => {
        if (value) notes[value] = false;
        return notes;
    }, sqrNotesInit(true));
}

export function getAllNotes(squares: dictionary<square>): dictionary<notes> {
    return Obj(squares).map(({ val: { id } }) => getSqrNotes(squares, id));
}
