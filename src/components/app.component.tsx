import { hot } from "react-hot-loader";
import React = require("react");
import { Grid } from ".";
import { run, clearGrid, logGrid, clipBoard } from "../state";

const AppComponent = () => (
    <div className="app">
        <h1>Sudoku</h1>
        <Grid />
        <div className="controls">
            <button onClick={run}>Run</button>
            <button onClick={clearGrid}>Clear</button>
            <button onClick={logGrid}>Log</button>
            <button onClick={clipBoard}>Copy</button>
        </div>
    </div>
) 

export const App = hot(module)(AppComponent);
