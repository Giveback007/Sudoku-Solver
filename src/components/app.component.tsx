import { hot } from "react-hot-loader";
import React = require("react");
import { Grid } from ".";

const AppComponent = () => (
    <div className="app">
        <h1>Sudoku</h1>
        <Grid />
    </div>
) 

export const App = hot(module)(AppComponent);
