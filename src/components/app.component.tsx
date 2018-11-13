import { hot } from "react-hot-loader";
import React = require("react");
import { Grid } from ".";
import { run, log, clearGrid } from "../state";

const AppComponent = () => (
    <div className="app">
        <h1>Sudoku</h1>
        <Grid />
        <div className="controls">
            <button onClick={run}>Run</button>
            {/* <button onClick={clearGrid}>Clear</button> */}
        </div>
    </div>
) 

export const App = hot(module)(AppComponent);
