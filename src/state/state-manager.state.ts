import { State } from "../@types/state.types";
import { clone, gameKeys } from "../util";
import { gridRefObj, value } from "../@types";
import { genNotes } from "../util/notes.util";

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
        logSquare(this.state.gridRef, id);
    }

    run = () => {
        genNotes(this.state.gridRef);
    }
}

function logSquare(gridRef: gridRefObj, id: string) {
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
