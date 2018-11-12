import { State } from "../@types";
import { logGrid, Game, n } from "../util";
import { value } from "../@types";
import { cloneLog, clone, Obj, sKeys, objFilter, dictionary } from '@giveback007/util-lib';
import { gameKeys, valueDict } from "../@data";

export class StateManager {
    set state(state: State) { if (!this._state) this.init(state); }
    get state() { return this._state; }
    get game() { return Game(this.state.squares); }
    private _state: State;

    private init(state: State) {
        this._state = state;
        window.addEventListener('keyup', (e) => this.sqrValueChange(e));
    }

    sqrValueChange = (x: KeyboardEvent | value | 'del', id?: string) => {
        const { activeSqr, squares } = this.state;
        
        const val: value | 'del' = x instanceof KeyboardEvent ? gameKeys[x.key] : x;
        const sqr = squares[id ? id : activeSqr];
        
        if (!sqr || !val || sqr.preset) return;

        sqr.value = val === 'del' ? null : val;
    }

    clickSqr = (id: string) => {
        this.state.activeSqr = id;
        // logSquare(this.state.gridRef, id);
    }

    run = () => {
        this.state.notes = this.game.allNotes();

        const newValDict: dictionary<value> = {};
        // Solve Named Single //
        Obj(this.state.notes).map(({ key, val }) => {
            const notes = Obj(val);
            const arr = notes.keys.filter((k) => val[k]);
            
            if (arr.length === 1) newValDict[key] = valueDict[arr[0]]
        });

        Obj(newValDict).map(({ key, val }) => this.state.squares[key].value = val);

        // objVals(this.grid).forEach((sqr) => {
        //     const arr = objKeys(sqr.notes).filter((n) => sqr.notes[n]);
        //     if (arr.length === 1) sqr.value = arr[0];
        // })

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
        logGrid(this.state.squares);
    }

    clearGrid = () => {
        // this.state.gridRef = generateGrid(null);
    }
}


