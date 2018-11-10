import { StateManager } from "./state-manager.state";

export const appState = new StateManager;
export const {
    clearGrid,
    clickSqr,
    log,
    run,
} = appState

