import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './packagesize.action';

// This file defines the initial state and the reducer function for managing the package size in an Angular application using NgRx.

// The create function is used to create a reducer function that handles actions related to package size.
// Each action is associated with a specific type, and the reducer updates the state based on the action type.
// Each action modifies the state accodingly :
// - increment: Increases the package size by 1.
// - decrement: Decreases the package size by 1.
// the mapped function takes the current state and returns a new state based on the action.
// The mapped function is called as the action is dispatched to the store.
// The action is a plain object that describes the event that occurred.
// The action is dispateched by the component or service that wants to change the state.
export const initialState = 0;
export const packageSizeReducer = createReducer(
    initialState,
    // The on function is used to define how the state should change in response to specific actions.
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1)
    // Try it : reset
);


// JavaScript is functional programming language.
// Classes were introduced in ES6, and TypeScript is a superset of JavaScript.