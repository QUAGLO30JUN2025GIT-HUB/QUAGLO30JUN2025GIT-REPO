import { createAction } from "@ngrx/store";
// This file defines actions for managing the package size in an Angular application using NgRx.
// Actions are used to describe events that can change the state of the application.
// The actions defined here are related to incrementing, decrementing, and resetting the package size.
// The createAction function is used to create actions in NgRx.
// The "[Package Size] Increment" passed to createAction is a type string that describes the action.
// The parameters passed to createAction are the payload of the action.
// If no parameters are passed, the action is considered a simple action without any payload.
// For example, in case of adding a payload, you can use:
// export const addPackageSize = createAction("[Package Size] Add", props<{ size: number }>());
export const increment = createAction("[Package Size] Increment");
export const decrement = createAction("[Package Size] Decrement");
// Try the reset.