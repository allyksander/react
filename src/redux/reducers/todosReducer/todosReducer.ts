import { Dispatch } from "redux";
import { TodosItem } from "@components/TodosItem/type";
import { ActionTypes, TodosAction, TodosState } from "./types";

const initialTodosState: TodosState = {
  todos: [],
  isLoading: false,
};

export const todosReducer = (
  state: TodosState = initialTodosState,
  action: TodosAction
) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ADD:
      return { ...state, todos: [...todos, payload] };

    case ActionTypes.REMOVE:
      return { ...state, todos: todos.filter(({ id }) => id !== payload) };

    case ActionTypes.UPDATE:
      return {
        ...state,
        todos: todos.map((item) =>
          item.id === payload ? { ...item, completed: !item.completed } : item
        ),
      };

    case ActionTypes.LOADING:
      return {
        ...state,
        isLoading: payload,
      };

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
    dispatch({ type: ActionTypes.LOADING, payload: true });
    await new Promise((resolve) => setTimeout(() => resolve(""), 2000));
    dispatch({ type: ActionTypes.LOADING, payload: false });

    return dispatch({ type: ActionTypes.ADD, payload });
  };
