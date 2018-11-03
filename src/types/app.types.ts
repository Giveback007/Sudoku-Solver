import { dictionary } from "./general.types";

export type value = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type row = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';
export type col = value;
export type blk = 'A1' | 'A4' | 'A7' | 'D1' | 'D4' | 'D7' | 'G1' | 'G4' | 'G7';

export type notes = { [k in value]: boolean };

export type square = {
    key: string;
    row: row;
    col: col;
    blk: blk;
    notes: notes;
    value: value | '0' | '';
    _value: value | '0' | '';
}

export type refObj<K extends string> = { [x in K]: dictionary<square> & { values: notes }; }

export type rowDict = refObj<row>;
export type colDict = refObj<col>;
export type blkDict = refObj<blk>;