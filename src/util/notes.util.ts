import { gridRefObj } from "../@types";
import { iterate } from "@giveback007/util-lib";
import { notesObj } from "./generate-grid.util";

export function genNotes(gridRef: gridRefObj) {
    const { gridArr, rows, cols, blks } = gridRef;

    gridArr.forEach((row) => {
        row.forEach(sqr => {
            sqr.notes = { ...notesObj };
            const { blk, col, row, notes } = sqr
            iterate(9).for(i => {
                const n = i + 1;

                if (sqr.value) return;
                if (rows[row].values[n]) return;
                if (cols[col].values[n]) return;
                if (blks[blk].values[n]) return;

                notes[n] = true;
            })
        })
    })
}

// ### if only one instance of notes# is found in a blk, sqr, or row then it is the outcome
