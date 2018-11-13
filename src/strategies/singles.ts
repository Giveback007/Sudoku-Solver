import { Obj, dictionary } from "@giveback007/util-lib";
import { value, notes } from "../@types";
import { house } from "../util";
import { nNotes, housesMap } from "../@data";

function nakedSingle(notes: notes): value {
    const arr = Obj(notes).keys.filter((k) => notes[k]);
    return arr.length === 1 ? arr[0] : null;
}

function hiddenSingles(notes: notes[]): value[] {
    const values = nNotes();

    notes.forEach((x) => 
        Obj(x).map(({ key, val }) => val ? values[key]++ : null));

    const filtered = Obj(values).filter(({ key, val }) => val === 1);

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
    const houses: ['rows', 'cols', 'blks'] = ['rows', 'cols', 'blks'];

    const newValsArr = houses.map((h) => {
        const hMap = housesMap[h];

        const houseNotes = Obj(hMap).map(({ val }) => house(notes, val));
        const houseVals = Obj(houseNotes).map(({ val }) => hiddenSingles(val));
        const valDicts = Obj(houseVals).map(({ key, val }) => {
            const newVals: dictionary<value> = { };

            // for each value find its coordinates and assign
            val.forEach((x) => {
                const id = housesMap[h][key].find((id) => notes[id][x]);
                newVals[id] = x;
            })

            return newVals;
        })

        return Obj(valDicts).vals.reduce((obj, vals) => Object.assign(obj, vals), {}) as dictionary<value>;
    });
    
    return newValsArr.reduce((o, x) => Object.assign(o, x), {});
}

/* Non-Guaranteed Candidate */
// Locked Pair - http://hodoku.sourceforge.net/en/tech_intersections.php
// Hidden Pair - http://hodoku.sourceforge.net/en/tech_hidden.php