import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "@redux/slices/todosSlice/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
