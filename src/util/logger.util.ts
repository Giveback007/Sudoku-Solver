import { gridRefObj } from "../@types";
import { clone } from ".";

export function logGrid(data: gridRefObj) {

    let total = 0;
    // data.valueArr.forEach((row) => {
    //     total += row.filter(x => x).length;
    //     console.log(row.map(x => x ? x : '_'));
    // });
    console.log(data.valueArr);
    console.log(`total: ${total}`);
}

export function logSquare(gridRef: gridRefObj, id: string) {
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