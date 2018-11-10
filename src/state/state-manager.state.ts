import { State } from "../@types";
import { gameKeys, logGrid,  generateGrid } from "../util";
import { value } from "../@types";
import { genNotes } from "../util";
import { objVals, objKeys } from "@giveback007/util-lib";

export class StateManager {
    set state(state: State) { if (!this._state) this.init(state); }

    get state() { return this._state; }
    get activeSqr() { return this.state.activeSqr }
    get grid() { return this.state.gridRef.grid }

    private _state: State;

    private init(state: State) {
        this._state = state;
        window.addEventListener('keyup', (e) => this.keyInput(e));
    }

    keyInput = (e: KeyboardEvent) => {
        const val: value | 'del' = gameKeys[e.key];
        const sqr = this.grid[this.activeSqr];
        
        if (!val || sqr.preset) return;

        sqr.value = val === 'del' ? null : val;
    }

    clickSqr = (id: string) => {
        this.state.activeSqr = id;
        // logSquare(this.state.gridRef, id);
    }

    run = () => {
        const { grid, blks, cols, rows } = this.state.gridRef;
        
        genNotes(this.state.gridRef);
        // solves easy & medium
        objVals(this.grid).forEach((sqr) => {
            const arr = objKeys(sqr.notes).filter((n) => sqr.notes[n]);
            if (arr.length === 1) sqr.value = arr[0];
        })

        // getGroupNotes();
        
        // solved hard
        // const arr = [blks, cols, rows];
        // arr.map((obj) => {
        //     objKeys(obj).forEach((key: blk | row) => {
        //         const x = { ...obj[key] };
        //         delete x.values;
        //         // Have the square auto set notes for the given blk, col, and row
        //         const notes = { ...sqrNotes };
        //         objVals(x as dictionary<square>).forEach((sqr) => )
        //     })
        // })
    }

    log = () => {
        logGrid(this.state.gridRef);
    }

    clearGrid = () => {
        this.state.gridRef = generateGrid(null);
    }
}


