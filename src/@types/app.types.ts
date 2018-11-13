import { dictionary, iterate } from "@giveback007/util-lib";

export type houseKeys = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | houseKeys;
    
export type row   = houseKeys;
export type col   = houseKeys;
export type blk   = houseKeys;

export type notes = { [k in row]: boolean };

export type square = {
    blk: blk;
    col: col;
    id: string;
    row: row;
    preset: boolean;
    value: value;
}

export type houseMap = { [k in houseKeys]: string[] }

// -- // -- // -- //
// export type gameDict = dictionary<value | notes>;

// export type NoteValsArgs = 
//     | { type: 'all' } 
//     | { type: 'sqr', key: string } 
//     | { type: 'row' | 'col' | 'blk', key: houseKeys };

// /** x, y & n are indexed `x = 0 is row-1`, `y = 0 is col-1` */
// const keys = {
//     notes: (x: number, y: number) => `notes-r${x + 1}c${y + 1}`,
//     value: (x: number, y: number) => `value-r${x + 1}c${y + 1}`,
//     sqr: (x: number, y: number) => `sqr-r${x + 1}c${y + 1}`,
//     row: (n: number) => `row-${n + 1}`,
//     col: (n: number) => `col-${n + 1}`,
//     blk: (n: number) => `blk-${n + 1}`,
// }

// function getNotes(args: NoteValsArgs, gameDict: gameDict) {
//     if (args.type === 'all') {
//         return iterate(9, 9).map(({ x, y }) => gameDict[keys.notes(x, y)])
//     } else if (args.type === 'sqr') {
//         const { type, key } = args;
        
//     } else {
//         // get house
//         const { type, key } = args;
//     }
// }

// function getValues(args: NoteValsArgs, gameDict: gameDict) {
//     if (args.type === 'all') {
//         // get all
//     } else if (args.type === 'sqr') {
//         // get sqr
//         const { type, key } = args;
        
//     } else {
//         // get house
//         const { type, key } = args;
//     }
// }

// const Game = (g: gameDict) => {
//     return {
//         getNotes: (args: NoteValsArgs) => getNotes(args, g),
//         getValues: (args: NoteValsArgs) => getValues(args, g)
//     }
// }