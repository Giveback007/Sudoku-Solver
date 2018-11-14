import { Obj, dictionary } from "@giveback007/util-lib";
import { value, notes } from "../@types";
import { house, getNumNotes } from "../util";
import { housesMap } from "../@data/houses.data";
import { houseTypes } from "../@data/app.data";

function nakedSingle(notes: notes): value {
    const arr = Obj(notes).keys.filter((k) => notes[k]);

    return arr.length === 1 ? arr[0] : null;
}

function hiddenSingles(notes: notes[]): value[] {
    const values = getNumNotes(notes);
    const filtered = Obj(values).filter(({ val }) => val === 1);

    return Obj(filtered).keys;
}

/* Guaranteed Candidate */
// Naked single - only note in the square
export function getNakedSingles(notes: dictionary<notes>) {
    const singles = Obj(notes).map(({ val }) => nakedSingle(val));
    const newVals: dictionary<value> = Obj(singles).filter(({ val }) => val as any);

    return newVals;
}

// Hidden single - only note in the house
export function getHiddenSingles(notes: dictionary<notes>) {
    
    const newValsArr = houseTypes.map((h) => {
        const hMap = housesMap[h];

        const houseNotes = Obj(hMap).map(({ val }) => house(notes, val));
        const houseVals = Obj(houseNotes).map(({ val }) => hiddenSingles(val));
        const valDicts = Obj(houseVals).map(({ key, val }) =>
            // for each value find its coordinates and assign
            val.reduce((newVals, x) => {
                const id = hMap[key].find((id) => notes[id][x]);
                newVals[id] = x;
                return newVals;
            }, { } as dictionary<value>)
        );

        return Obj(valDicts).vals.reduce((obj, vals) => Object.assign(obj, vals), {}) as dictionary<value>;
    });
    
    return newValsArr.reduce((o, x) => Object.assign(o, x), {});
}
