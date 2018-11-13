import { dictionary, arrGen } from '@giveback007/util-lib';
import { blk, notes, col, row } from '../@types';

export * from './presets.data';

export const blocksDict: dictionary<blk> = {
    11: '1', 14: '2', 17: '3', 41: '4', 44: '5', 47: '6', 71: '7', 74: '8', 77: '9'
};

export const colKeys: col[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const rowKeys: row[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const blkKeys: blk[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const nNotes = () =>
    ({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 });

export const sqrNotesInit = (bool): notes =>
    ({ 1: bool, 2: bool, 3: bool, 4: bool, 5: bool, 6: bool, 7: bool, 8: bool, 9: bool })

export const valueDict = {
    '1': 1 as 1,
    '2': 2 as 2,
    '3': 3 as 3,
    '4': 4 as 4,
    '5': 5 as 5,
    '6': 6 as 6,
    '7': 7 as 7,
    '8': 8 as 8,
    '9': 9 as 9,
}

export const gameKeys = {
    ...valueDict,
    'Backspace': 'del' as 'del',
    'Delete': 'del' as 'del'
}
