import { TodosItem } from "@components/TodosItem/type";

export type TodosState = {
  todos: TodosItem[];
  isLoading: boolean;
};
