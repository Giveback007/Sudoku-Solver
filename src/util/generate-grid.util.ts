import { square, row, value, blk, notes } from "../@types";
import { iterate, dictionary, arrGen } from "@giveback007/util-lib";
import { blocksDict, sqrNotesInit } from "../@data/app.data";

const blkMax = (n) => n % 3 ? n + (3 - n % 3) : n;
const blkMin = (n) => blkMax(n) - 2;
const getBlkName = (row, col): blk => blocksDict['' + blkMin(row) + blkMin(col)];

export function generateGrid(preGenGrid?: value[][]) {
    
    const squares: dictionary<square> = {};
    const notes: dictionary<notes> = {};
    const ids = arrGen(9).map((): string[] => []);
    
    iterate(9, 9).for(({ x, y }) => {
        const row: row = x + 1 as any;
        const col: row = y + 1 as any;
        const blk = getBlkName(row, col);
        const id = '' + row + col;

        let value = null;
        let preset = null;

        if (preGenGrid && preGenGrid[x][y]) {
            value = preGenGrid[x][y];
            preset = true;
        }
        
        ids[x][y] = id;
        squares[id] = { preset, value, id, row, col, blk };
        notes[id] = sqrNotesInit(false);
    });

    return { squares, notes, ids };
}
