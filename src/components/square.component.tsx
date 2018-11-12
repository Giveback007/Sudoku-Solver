import React = require("react");
import { square, notes } from "../@types";
import { clickSqr } from "../state";
import { objVals, dictionary } from "@giveback007/util-lib";

const Note = ({ bool, i }: { bool: boolean, i: number }) => (
    <div><span>{bool ? i + 1 : null}</span></div>
)

const Notes = ({ notes }: { notes: notes }) => (
    <div className="notes">
        {objVals(notes).map((bool, i) => <Note key={i} { ...{ bool, i } } />)}
    </div>
);

type squareProps = square & { activeSqr: string, notes: dictionary<notes> };
export const Square = ({ value: val, id, activeSqr: act, preset, notes }: squareProps) => (
    <div
        className={`sqr${preset? ' preset' : ''}${act === id ? ' active' : ''}`}
        onClick={() => clickSqr(id)}
    >
        <Notes notes={notes[id]} />
        <span>{val ? val : ''}</span>
    </div>
)
