export type value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type row   = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type col   = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type blk   = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';

export type notes = { [k in row]: boolean };

export type square = {
    blk: blk;
    col: col;
    id: string;
    row: row;
    preset: boolean;
    value: value;
}
