import { notes, value } from "../@types";
import { dictionary, Obj, arrFlatten } from "@giveback007/util-lib";
import { getNumNotes, house } from "../util";
import { houseTypes } from "../@data/app.data";
import { housesMap } from "../@data/houses.data";

/* Non-Guaranteed Candidate */
// Locked Pair - http://hodoku.sourceforge.net/en/tech_intersections.php
// Hidden Pair - http://hodoku.sourceforge.net/en/tech_hidden.php

// A locked pair is when 2 #s occupy the same 2 squares in a house
// This rules out all other notes in the those 2 squares

/** Takes a dictionary of notes from a house */
export function lockedPairs(notes: dictionary<notes>) {
    const notesArr = Obj(notes).vals;

    const nNotes = getNumNotes(notesArr as any);
    const filtered = Obj(nNotes).filter(({ val }) => val === 2);

    // ids of numbers that have 2 in the house
    const ids: dictionary<[string, string]> = Obj(filtered).map(({ key }) => {
        const value: value = key;

        const filtered = Obj(notes).filter(({ val }) => val[key]);
        
        return Obj(filtered).keys;
    });

    const x: [[string, string], [value, value]][] = [];
    
    Obj(ids).map(({ key: v1, val: val1 }) => {
        Obj(ids).map(({ key: v2, val: val2 }) => {
            if (v1 === v2 || !val2.includes(val1[0]) || !val2.includes(val1[1])) return;

            const found = x.find(([ids, vals]) => v1 === vals[0] || v1 === vals[1]);
            if (found) return;

            x.push([val1, [v1, v2]] as any);
        })
    })

    return x;
}

export function getLockedPairs(notes: dictionary<notes>): [[string, string], [value, value]][] {
    const extract = Obj(notes).extract;

    const x = houseTypes.map(h => {
        const hMap = housesMap[h];
        
        const houseNotes = Obj(hMap).map(({ val }) => extract(val));
        // const houseNotes = Obj(hMap).map(({ val }) => house(notes, val));
        const pairs = Obj(houseNotes).map(({ val }) => lockedPairs(val));

        return arrFlatten(Obj(pairs).vals);
        // const locked = lockedPairs(houseNotes);
    });

    // now that you found the locked pairs you need to eliminate other notes based on
    // these findings
    return arrFlatten(x);
}