import { notes } from '../@types';

export const blocksDict: {
    11: '1', 14: '2', 17: '3', 41: '4', 44: '5', 47: '6', 71: '7', 74: '8', 77: '9'
} = {
    11: '1', 14: '2', 17: '3', 41: '4', 44: '5', 47: '6', 71: '7', 74: '8', 77: '9'
};

export const nNotes = () =>
    ({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 });

export const sqrNotesInit = (bool): notes =>
    ({ 1: bool, 2: bool, 3: bool, 4: bool, 5: bool, 6: bool, 7: bool, 8: bool, 9: bool })

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

export const arrowKeys: {
    'ArrowDown': [1, 0],
    'ArrowUp': [-1, 0],
    'ArrowLeft': [0, -1],
    'ArrowRight': [0, 1],
} = {
    'ArrowDown': [1, 0],
    'ArrowUp': [-1, 0],
    'ArrowLeft': [0, -1],
    'ArrowRight': [0, 1],
}
