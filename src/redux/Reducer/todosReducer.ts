import { ITodosItem } from "@components/TodosItem/type";

export enum ActionTypes {
  ADD = "todos/add",
  REMOVE = "todos/remove",
  UPDATE = "todos/update",
}

interface ITodosAdd {
  type: ActionTypes.ADD;
  payload: ITodosItem;
}

interface ITodosRemove {
  type: ActionTypes.REMOVE;
  payload: string;
}

interface ITodosUpdate {
  type: ActionTypes.UPDATE;
  payload: string;
}

type ITodosAction = ITodosAdd | ITodosRemove | ITodosUpdate;

export const todosReducer = (
  state: ITodosItem[] = [],
  action: ITodosAction
) => {
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
