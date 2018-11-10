import { notes } from '../@types';
import { arrGen } from '@giveback007/util-lib';

export * from './generate-grid.util';
export * from './notes.util';
export * from './logger.util';

export const print = (...args: any[]) => print(...args);

export const clone = <T>(obj: T) => JSON.parse(JSON.stringify(obj));

export const nNotes = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

export const sqrNotes: notes = arrGen(9).reduce((obj, x, i) => { obj[i + 1] = false; return obj; }, { });

export const gameKeys = {
    '1': 1 as 1,
    '2': 2 as 2,
    '3': 3 as 3,
    '4': 4 as 4,
    '5': 5 as 5,
    '6': 6 as 6,
    '7': 7 as 7,
    '8': 8 as 8,
    '9': 9 as 9,
    'Backspace': 'del' as 'del',
    'Delete': 'del' as 'del'
}
