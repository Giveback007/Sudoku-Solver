import React = require("react");
import { square } from "../@types";
import { clickSqr } from "../state";

export const Square = ({
    value: val, id, activeSqr: act, preset
}: square & { activeSqr: string }) => (
    <div
        className={`sqr${preset? ' preset' : ''}${act === id ? ' active' : ''}`}
        onClick={() => clickSqr(id)}
    ><span>{val ? val : ''}</span></div>
)
