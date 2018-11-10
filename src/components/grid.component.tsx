import React = require("react");
import { connect } from "@giveback007/mutable-react-state";
import { State } from "../@types/state.types";
import { square } from "../@types";
import { Square } from ".";

type RowProps = { data: square[], activeSqr: string };
const Row = ({ data, activeSqr }: RowProps) => (
    <div className="row">
        {data.map(sqr => <Square key={sqr.id} { ...{ ...sqr, activeSqr } }/>)}
    </div>
)

export const Grid = connect((s: State) => s)(
({ gridRef: { gridArr }, activeSqr }) => (
    <div className="grid">
        {gridArr.map((row, i) => <Row key={i} data={row} activeSqr={activeSqr}/>)}
    </div>
))
