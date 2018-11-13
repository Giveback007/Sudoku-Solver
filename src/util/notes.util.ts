import { dictionary, Obj, } from "@giveback007/util-lib";
import { square, notes } from "../@types";
import { sqrNotesInit } from "../@data";
import { getSqrNotes } from "./square.util";

export function reduceToNotes2(sqrs: notes[]) {
    // sqrs.reduce(())
    // return sqrs.reduce((notes, { value }): notes => {
    //     if (value) notes[value] = false;
    //     return notes;
    // }, sqrNotesInit(true));
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
