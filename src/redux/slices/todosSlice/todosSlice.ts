import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodosState } from "./types";
import { TodosItem } from "@components/TodosItem/type";

const todosSliceName = "todos";
const initialState: TodosState = {
  todos: [],
  isLoading: false,
};

export const todosAddAsync = createAsyncThunk(
  `${todosSliceName}/todosAddAsync`,
  async (data: TodosItem) => {
    await new Promise((resolve) => setTimeout(() => resolve(""), 2000));

    return data;
  }
);

export const todosSlice = createSlice({
  name: todosSliceName,
  initialState,
  reducers: {
    todosAdd: ({ todos }, { payload }: PayloadAction<TodosItem>) => {
      console.log(payload);
      todos.push(payload);
    },
    todosRemove: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
    todosUpdate: ({ todos }, { payload }: PayloadAction<string>) => {
      const targetItem = todos.find((item) => item.id === payload);

      if (targetItem) {
        targetItem.completed = !targetItem.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(todosAddAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(todosAddAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    });
    builder.addCase(todosAddAsync.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { todosAdd, todosRemove, todosUpdate } = todosSlice.actions;

export default todosSlice.reducer;
