import "./styles/index.scss";
import React = require("react");
import { appState } from "./state";
import { initStateAndRender } from '@giveback007/mutable-react-state';
import { App } from "./components/app.component";
import { generateGrid } from "./util/generate-grid.util";
import { initState } from "./state/init.state";
import { print } from "util";

const state = initStateAndRender(<App />, document.getElementById('root'), initState).state

console.log(state);
appState.state = state;

window['genGame'] = generateGrid;
window['state'] = appState.state;

// function addValues(data: ReturnType<typeof generateGrid>) {
	
// 	iterate(81).for(() => {
// 		const x = rand(0, 8);
// 		const y = rand(0, 8);
		
// 		const { value, blk, col, row } = data.grid[x][y];
// 		if (!value) {
// 			const n = rand(1, 9) + '' as value;
            
//             // different types of checks
// 			if (data.rows[row].values[n]) return;
// 			if (data.cols[col].values[n]) return;
//             if (data.blks[blk].values[n]) return;
//             // TODO add more
			
// 			data.grid[x][y].value = n;
// 		}
// 	});
// }
