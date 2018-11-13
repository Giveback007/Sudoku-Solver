import { StateManager } from "./manager.state";

export const appState = new StateManager;

export const {
    clearGrid,
    clickSqr,
    logGrid,
    run,
    clipBoard
} = appState

export * from './init.state';