import { TodosItem } from "@components/TodosItem/type";

export type TodosState = {
  todos: TodosItem[];
  isLoading: boolean;
};

export enum ActionTypes {
  ADD = "todos/add",
  REMOVE = "todos/remove",
  UPDATE = "todos/update",
  LOADING = "todos/loading",
}

type TodosAdd = {
  type: ActionTypes.ADD;
  payload: TodosItem;
};

type TodosRemove = {
  type: ActionTypes.REMOVE;
  payload: string;
};

type TodosUpdate = {
  type: ActionTypes.UPDATE;
  payload: string;
};

type TodosLoading = {
  type: ActionTypes.LOADING;
  payload: boolean;
};

export type TodosAction = TodosAdd | TodosRemove | TodosUpdate | TodosLoading;
