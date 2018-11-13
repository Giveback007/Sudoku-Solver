import "./styles/index.scss";
import React = require("react");
import { initStateAndRender } from '@giveback007/mutable-react-state';
import { App } from "./components";
import { initState, appState } from "./state";

appState.state = initStateAndRender(<App />, document.getElementById('root'), initState).state;
