import { dictionary } from '@giveback007/util-lib';

export type value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type row   = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type col   = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type blk = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'

export type notes = { [k in value]: boolean };

export type square = {
    blk: blk;
    col: col;
    id: string;
    notes: notes;
    row: row;
    preset: boolean;
    value: value;
    _value: value;
}

export type refObj<K extends (string | number)> = { [x in K]: dictionary<square> & { values: notes }; }

export type rowDict = refObj<row>;
export type colDict = refObj<col>;
export type blkDict = refObj<blk>;

export type gridRefObj = {
    rows: refObj<row>;
    cols: refObj<col>;
    blks: refObj<blk>;
    grid: dictionary<square>;
    gridArr: square[][];
    valueArr: number[][];
}
