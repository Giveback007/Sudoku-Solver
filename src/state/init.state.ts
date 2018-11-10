import { State } from "../@types";
import { generateGrid } from "../util";
import { presets } from "../@data";

const preGen = presets()[0] as any;

export const initState: State = {
	activeSqr: null,
	gridRef: generateGrid(preGen)
};
