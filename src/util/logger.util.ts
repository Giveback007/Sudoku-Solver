import { clone, dictionary, iterate } from "@giveback007/util-lib";
import { square } from "../@types";

export function gridLogger(sqrs: dictionary<square>) {
    console.log(clone(sqrs))
    let total = 0;
    const values = iterate(9, 9).nestedMap(({ x, y }) => sqrs['' + (x + 1) + (y + 1)].value);

    values.forEach((row) => {
        total += row.filter(x => x).length;
        console.log(row.map(x => x ? x + '' : ' '));
    });
    
    console.log(`total: ${total}`);
}

export function copyGrid(sqrs: dictionary<square>) {
    const values = iterate(9, 9).nestedMap(({ x, y }) => sqrs['' + (x + 1) + (y + 1)].value);
    
    console.log(copyTextToClipboard(JSON.stringify(values)));
}

export function logSquare(gridRef, id: string) {
    const { blks, cols, grid, rows } = gridRef;
    const sqr = grid[id];
    const row = rows[sqr.row];
    const col = cols[sqr.col];
    const blk = blks[sqr.blk];
    console.log('sqr-' + id, clone(sqr));
    console.log('row-' + sqr.row, clone(row));
    console.log('col-' + sqr.col, clone(col));
    console.log('blk-' + sqr.blk, clone(blk));
}

function copyTextToClipboard(text) {
    if (!(navigator as any).clipboard) throw 'no clip board'; 
    
    (navigator as any).clipboard.writeText(text).then(() => {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }