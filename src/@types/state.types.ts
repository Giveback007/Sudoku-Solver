import { square, notes } from "./app.types";
import { dictionary } from "@giveback007/util-lib";

export type State = {
    activeSqr: string;
    squares: dictionary<square>;
    notes: dictionary<notes>;
    ids: string[][]
}
