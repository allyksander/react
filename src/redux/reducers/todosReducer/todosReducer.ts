import { Dispatch } from "redux";
import { TodosItem } from "@components/TodosItem/type";
import { ActionTypes, TodosAction } from "./types";

export const todosReducer = (state: TodosItem[] = [], action: TodosAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ADD:
      return [...state, payload];

    case ActionTypes.REMOVE:
      return state.filter(({ id }) => id !== payload);

    case ActionTypes.UPDATE:
      return state.map((item) =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      );

    default:
      return state;
  }
};

export const addTodosItem =
  (payload: TodosItem) => (dispatch: Dispatch<TodosAction>) =>
    dispatch({ type: ActionTypes.ADD, payload });

export const removeTodosItem =
  (payload: string) => (dispatch: Dispatch<TodosAction>) =>
    dispatch({ type: ActionTypes.REMOVE, payload });

export const updateTodosItem =
  (payload: string) => (dispatch: Dispatch<TodosAction>) =>
    dispatch({ type: ActionTypes.UPDATE, payload });

export const addTodosItemAsync =
  (payload: TodosItem) => async (dispatch: Dispatch<TodosAction>) => {
    await new Promise((resolve) => setTimeout(() => resolve(""), 2000));

    return dispatch({ type: ActionTypes.ADD, payload });
  };
