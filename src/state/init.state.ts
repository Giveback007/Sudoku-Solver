import { State } from "../@types";
import { generateGrid } from "../util";
import { easy1, medium1, hard1, expert1 } from "../@data";

export const initState: State = { 
	activeSqr: null,
	...generateGrid(expert1)
};
