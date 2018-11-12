import React = require("react");
import { connect } from "@giveback007/mutable-react-state";
import { State } from "../@types/state.types";
import { square, notes } from "../@types";
import { Square } from ".";
import { dictionary } from "@giveback007/util-lib";

type RowProps = { rowIds: string[], activeSqr: string, squares: dictionary<square>, notes: dictionary<notes> };
const Row = ({ rowIds, activeSqr, squares, notes }: RowProps) => (
    <div className="row">
        {rowIds.map(id => <Square key={id} { ...{ ...squares[id], activeSqr, notes } }/>)}
    </div>
)

export const Grid = connect((s: State) => s)(
({ squares, activeSqr, ids, notes }) => (
    <div className="grid">
        {ids.map((rowIds, i) => <Row key={i} { ...{ rowIds, activeSqr, squares, notes } }/>)}
    </div>
))
