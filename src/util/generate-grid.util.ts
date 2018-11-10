import { rowDict, colDict, blkDict, square, notes, row, blk, col, gridRefObj, value } from "../@types/app.types";
import { arrGen, iterate, dictionary } from "@giveback007/util-lib";
import { sqrNotes } from ".";

const blocks: dictionary<blk> = { 11: 'A', 14: 'B', 17: 'C', 41: 'D', 44: 'E', 47: 'F', 71: 'G', 74: 'H', 77: 'I' };

const getMax = (n) => n % 3 ? n + (3 - n % 3) : n;
const getMin = (n) => getMax(n) - 2;

const emptyGridRefObj = (): gridRefObj => ({
    valueArr: arrGen(9).map(() => arrGen(9)),
    gridArr: arrGen(9).map(() => []),
    rows: { } as rowDict,
    cols: { } as colDict,
    blks: { } as blkDict,
    grid: { },
})

export function generateGrid(preGenGrid?: value[][]): gridRefObj {
    const { valueArr, gridArr, rows, cols, blks, grid } = emptyGridRefObj();

    iterate(9, 9).for(({ x, y }) => {
        const row = x + 1 as row;
        const col = y + 1 as col;
        const blk = blocks['' + getMin(x + 1) + getMin(y + 1)];
        const id = '' + row + col;
        
        const square: square = {
            id, row, col, blk, 
            preset: false,
            notes: { ...sqrNotes },
            _value: null,
            get value(): value { return this._value; },
            set value(val: value) {
                const prevVal: value = this.value;
                const reset = !val && prevVal !== null;

                const dicts = [ rows[row], cols[col], blks[blk] ];
            
                if (reset) {
                    this._value = null;

                    dicts.forEach((obj) => obj.values[prevVal] = false);

                    const idx = valueArr[x].indexOf(Number(val));
                    valueArr[x][idx] = null;
                } else if (val) {
                    this._value = val;

                    dicts.forEach((obj) => obj.values[val] = true);

                    valueArr[x][y] = Number(val);
                }

                // console.log('sqr' +  id, this);
                // console.log('row' + row, rows[row].values);
                // console.log('col' + col, cols[col].values);
                // console.log('blk' + blk, blks[blk].values);
            },
        };

        if (!rows[row]) rows[row] = { values: { ...sqrNotes } } as any;
        if (!cols[col]) cols[col] = { values: { ...sqrNotes } } as any;
        if (!blks[blk]) blks[blk] = { values: { ...sqrNotes } } as any;
        
        if (preGenGrid && preGenGrid[x][y]) {
            square.value = preGenGrid[x][y];
            square.preset = true;
        }
        
        grid[id] = square;
        gridArr[x][y] = square;
        rows[row][id] = square;
        cols[col][id] = square;
        blks[blk][id] = square;
    });

    return { rows, cols, blks, gridArr, valueArr, grid };
}
