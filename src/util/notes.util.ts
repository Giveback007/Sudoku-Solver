import { dictionary, Arr, Obj, } from "@giveback007/util-lib";
import { square, notes } from "../@types";
import { sqrNotes } from "../@data";
import { getHouses } from ".";

export function getNotes(squares: dictionary<square>, id: string) {
    if (squares[id].value) return sqrNotes(false);
    const { col, row, blk } = getHouses(squares, id);

    return [ ...col, ...row, ...blk ].reduce(
    (notes, { value }) => {
        if (value) notes[value] = false;
        return notes;
    }, sqrNotes(true));
}

export function getAllNotes(squares: dictionary<square>): dictionary<notes> {
    return Obj(squares).map(({ val: { id } }) => getNotes(squares, id));


    // gridArr.forEach((row) => {
    //     row.forEach(sqr => {
    //         sqr.notes = { ...sqrNotes };
    //         const { blk, col, row, notes } = sqr
    //         iterate(9).for(({ x }) => {
    //             const n = x + 1;

    //             if (sqr.value) return;
    //             if (rows[row].values[n]) return;
    //             if (cols[col].values[n]) return;
    //             if (blks[blk].values[n]) return;

    //             notes[n] = true;
    //         })
    //     })
    // })
}

// type T = refObj<row> | refObj<col> | refObj<blk>;
// /** Notes for row | col | blk */
// export function getGroupNotes(x: T) {
//     const obj: dictionary<square> = removeObjKeys(x, ['values']);
//     console.log('stuff', x);
//     objKeys(obj).forEach((key) => {
//         console.log(x[key])
//     })
// }

// ### if only one instance of notes# is found in a blk, sqr, or row then it is the outcome
