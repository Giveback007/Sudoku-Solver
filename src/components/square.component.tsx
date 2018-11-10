import React = require("react");
import { square, notes } from "../@types";
import { clickSqr } from "../state";
import { objVals } from "@giveback007/util-lib";

const Note = ({ bool, i }: { bool: boolean, i: number }) => (
    <div><span>{bool ? i + 1 : null}</span></div>
)

const Notes = ({ notes }: { notes: notes }) => (
    <div className="notes">
        {objVals(notes).map((bool, i) => <Note key={i} { ...{ bool, i } } />)}
    </div>
);

export const Square = ({
    value: val, id, activeSqr: act, preset, notes
}: square & { activeSqr: string }) => (
    <div
        className={`sqr${preset? ' preset' : ''}${act === id ? ' active' : ''}`}
        onClick={() => clickSqr(id)}
    >
        <Notes notes={notes} />
        <span>{val ? val : ''}</span>
    </div>
)
