import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
