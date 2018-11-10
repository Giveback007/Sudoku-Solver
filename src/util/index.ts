export * from './generate-grid.util';
export * from './logger.util';

export const clone = <T>(obj: T) => JSON.parse(JSON.stringify(obj));

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
