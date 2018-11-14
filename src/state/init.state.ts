import { State } from "../@types";
import { generateGrid } from "../util";
import { expert1, expert2 } from "../@data/presets.data";

export const initState: State = { 
	activeSqr: null,
	...generateGrid(expert2)
};
