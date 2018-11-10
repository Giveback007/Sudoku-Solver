import { gridRefObj, refObj, row, col, blk, square } from "../@types";
import { iterate, removeObjKeys, dictionary, objKeys } from "@giveback007/util-lib";
import { sqrNotes } from ".";
import { print } from "util";

export function genNotes(gridRef: gridRefObj) {
    const { gridArr, rows, cols, blks } = gridRef;
    
    gridArr.forEach((row) => {
        row.forEach(sqr => {
            sqr.notes = { ...sqrNotes };
            const { blk, col, row, notes } = sqr
            iterate(9).for(({ x }) => {
                const n = x + 1;

                if (sqr.value) return;
                if (rows[row].values[n]) return;
                if (cols[col].values[n]) return;
                if (blks[blk].values[n]) return;

                notes[n] = true;
            })
        })
    })
}
type T = refObj<row> | refObj<col> | refObj<blk>;
/** Notes for row | col | blk */
export function getGroupNotes(x: T) {
    const obj: dictionary<square> = removeObjKeys(x, ['values']);
    print('stuff', x);
    objKeys(obj).forEach((key) => {
        print(x[key])
    })
}

// ### if only one instance of notes# is found in a blk, sqr, or row then it is the outcome
