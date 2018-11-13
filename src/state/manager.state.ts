import { State, direction } from "../@types";
import { gridLogger, Game, copyGrid, generateGrid } from "../util";
import { value } from "../@types";
import { getNakedSingles, getHiddenSingles } from "../strategies";
import { Obj } from "@giveback007/util-lib";
import { gameKeys, arrowKeys } from "../@data/app.data";

export class StateManager {
    set state(state: State) { if (!this._state) this.init(state); }
    get state() { return this._state; }
    get game() { return Game(this.state.squares); }
    private _state: State;

    private init(state: State) {
        this._state = state;
        window.addEventListener('keyup', (e) => this.keyboardEvent(e));
    }

    keyboardEvent = (x: KeyboardEvent) => {
        const value: value | 'del' = gameKeys[x.key];
        const direction: direction = arrowKeys[x.key];

        if (value) {
            this.sqrValueChange(value);
        } else if (direction) {
            this.sqrActiveChange({ direction });
        }   
    }

    sqrActiveChange = ({ id, direction: dirc }: { id?: string, direction?: direction }) => {
        if (id) return this.state.activeSqr = id;
        const { col, row } = this.state.squares[this.state.activeSqr];
        
        const newId = '' + (Number(row) + dirc[0]) + (Number(col) + dirc[1]);
        if (!this.state.squares[newId]) return;
        
        this.state.activeSqr = newId;
    }

    sqrValueChange = (val: value | 'del', id?: string) => {
        const { activeSqr, squares } = this.state;
        const sqr = squares[id ? id : activeSqr];
        
        if (!sqr || !val || sqr.preset) return;

        sqr.value = val === 'del' ? null : val;
    }

    clickSqr = (id: string) => {
        this.sqrActiveChange({ id });
        // logSquare(this.state.gridRef, id);
    }

    run = () => {
        this.state.notes = this.game.allNotes();
        const nakedSingles = getNakedSingles(this.state.notes);
        const hiddenSingles = getHiddenSingles(this.state.notes);

        const newVals = Object.assign({}, nakedSingles, hiddenSingles);
        Obj(newVals).map(({ key, val }) => this.state.squares[key].value = val);
    }

    logGrid = () => gridLogger(this.state.squares);

    clipBoard = () => copyGrid(this.state.squares);

    clearGrid = () => Object.assign(this.state, generateGrid());
}


