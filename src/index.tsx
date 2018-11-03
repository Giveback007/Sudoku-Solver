import React = require("react");
import ReactDOM = require("react-dom");
import { Provider } from "react-redux";
import App from "./components/app.component";
import { store } from "./store";

import "./index.scss";
import { arrGen } from "./util/array.util";
import { iterate, rand } from "./util/general.util";
import { notes, square, row, col, blk, rowDict, colDict, blkDict, refObj, value } from "./types/app.types";
import { dictionary } from "./types/general.types";
import { jsonp } from "./util/http.util";
import { genDictionary } from "./util/object.util";

document.body.innerHTML += '<div id="app-root"></div>'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-root')
);

const getKey = (x, y) => '' + (x + 1) + (y + 1);
const getMax = (n) => n % 3 ? n + (3 - n % 3) : n;
const getMin = (n) => getMax(n) - 2;

function generateGrid(preGenGrid: (value | '0' | '')[][]) {
    const blocks = { 11: 'A', 14: 'B', 17: 'C', 41: 'D', 44: 'E', 47: 'F', 71: 'G', 74: 'H', 77: 'I' };
    const notes: notes = arrGen(9).reduce((obj, x, i) => { obj[i + 1] = false; return obj; }, {});

	const grid: square[][] = iterate(9).map(() => []);
    const rows = { } as rowDict;
    const cols = { } as colDict;
    const blks = { } as blkDict;

    iterate(9).for((x) => iterate(9).for((y) => {
        const row = x + 1 + '' as row;
        const col = y + 1 + '' as col;
        const blk = blocks['' + getMin(x + 1) + getMin(y + 1)] as blk;
        const key = row + col;
        
        const square: square = { 
            key, row, col, blk, 
            notes: { ...notes },
            _value: null,
            get value() { return this._value; },
            set value(x: square['value']) {
                const prev = this._value;
                let reset = !x || x === '0';
                
                this._value = x;
                
                [ rows[row], cols[col], blks[blk] ]
                    .forEach((obj) => obj.values[reset ? prev : x] = !reset)
            },
        };

        if (!rows[row]) rows[row] = { values: { ...notes } } as any;
        if (!cols[col]) cols[col] = { values: { ...notes } } as any;
        if (!blks[blk]) blks[blk] = { values: { ...notes } } as any;
        
        square.value = preGenGrid ? preGenGrid[x][y] ? preGenGrid[x][y] : '0' : '0';
        
        grid[x][y] = square;
        rows[row][key] = square;
        cols[col][key] = square;
        blks[blk][key] = square;
    }));

    return { rows, cols, blks, grid };
}

function addValues(data: ReturnType<typeof generateGrid>) {
	
	iterate(81).for(() => {
		const x = rand(0, 8);
		const y = rand(0, 8);
		
		const { value, blk, col, row } = data.grid[x][y];
		if (!value) {
			const n = rand(1, 9) + '' as value;
            
            // different types of checks
			if (data.rows[row].values[n]) return;
			if (data.cols[col].values[n]) return;
            if (data.blks[blk].values[n]) return;
            // TODO add more
			
			data.grid[x][y].value = n;
		}
	});
}