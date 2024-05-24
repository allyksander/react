import { ITodosItem } from "./type";
import { useDispatch } from "react-redux";
import { ActionTypes } from "@redux/Reducer/todosReducer";
import "./TodosItem.scss";

export const TodosItem = ({
  props: { id, completed, title },
}: {
  props: ITodosItem;
}) => {
  const dispatch = useDispatch();

  const removeTodo = (): void => {
    dispatch({
      type: ActionTypes.REMOVE,
      payload: id,
    });
  };

  const updateTodo = (): void => {
    dispatch({
      type: ActionTypes.UPDATE,
      payload: id,
    });
  };

  return (
    <li className="todos-item" key={id}>
      <label className="todos-item__label">
        <input
          type="checkbox"
          name=""
          checked={completed}
          onChange={updateTodo}
          className="todos-item__checkbox"
        />
        <span className="todos-item__title">{title}</span>
      </label>
      <button className="todos-item__button" onClick={removeTodo}>
        Remove
      </button>
    </li>
  );
};
