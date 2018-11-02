import React = require("react");
import ReactDOM = require("react-dom");
import { Provider } from "react-redux";
import App from "./components/app.component";
import { store } from "./store";

import "./index.scss";
import { arrGen } from "./util/array.util";
import { iterate } from "./util/general.util";
import { notes, square } from "./types/app.types";
import { dictionary } from "./types/general.types";

document.body.innerHTML += '<div id="app-root"></div>'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-root')
);

const notes: notes = arrGen(9).reduce((obj, x, i) => { obj[i + 1] = false; return obj; }, {});
const genSquare = (key: string): square => ({ key, value: null, notes: { ...notes } });

const toKey = (c: string | number, n: string | number) => String.fromCharCode(Number(c) + 65) + (Number(n) + 1);

function generateGrid() {
    const obj: dictionary<square> = {};

    iterate(9).for((c) => iterate(9).for((n) =>
        obj[toKey(c, n)] = genSquare(toKey(c, n))));

    return obj;
}

class Grid {
    data = generateGrid();
    
    getRow = (key: string) => iterate(9).map((i) => this.data[key[0] + (i + 1)]);
    
    getCol = (key: string) => iterate(9).map((i) => this.data[toKey(i, key[1])]);

    getBlock(key: string) {
        const getMax = (n) => n + (n % 3 ? 3 - (n % 3) : 0) - 1;
    
        const maxChr = getMax(key.charCodeAt(0) - 64);
        const maxNum = getMax(Number(key[1]));
    
        const arr: string[] = [];
        iterate(3).for((c) => iterate(3).for((n) => arr.push(toKey(maxChr - c, maxNum - n))));

        return arr.map((key) => this.data[key]);
    }
}
