import { hot } from "react-hot-loader";
import React = require("react");
import { Grid } from ".";
import { run } from "../state";

const AppComponent = () => (
    <div className="app">
        <h1>Sudoku</h1>
        <Grid />
        <button onClick={run}>Run</button>
    </div>
) 

export const App = hot(module)(AppComponent);
