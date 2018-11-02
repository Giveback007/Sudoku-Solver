export type value = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type notes = { [k in value]: boolean };

export type square = {
    key: string;
    value: value;
    notes: notes;
}