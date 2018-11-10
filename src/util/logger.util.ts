import { gridRefObj } from "../@types/app.types";

export function logGrid(data: gridRefObj) {
    // const values = data.grid.map((row) => row.map((x) => x.value));
    let total = 0;
    data.valueArr.forEach((row) => {
        total += row.filter(x => x).length;
        console.log(row.map(x => x ? x : '_'));
    });
    
    console.log(`total: ${total}`);
}