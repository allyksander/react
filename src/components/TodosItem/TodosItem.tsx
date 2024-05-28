import { TodosItem as TodosItemType } from "./type";
import { useAppDispatch } from "@redux/hooks/hooks";
import { todosRemove, todosUpdate } from "@redux/slices/todosSlice/todosSlice";
import "./TodosItem.scss";

export const TodosItem = ({
  props: { id, completed, title },
}: {
  props: TodosItemType;
}) => {
  const dispatch = useAppDispatch();

  return (
    <li className="todos-item" key={id}>
      <label className="todos-item__label">
        <input
          type="checkbox"
          name=""
          checked={completed}
          className="todos-item__checkbox"
          onChange={() => dispatch(todosUpdate(id))}
        />
        <span className="todos-item__title">{title}</span>
      </label>
      <button
        className="todos-item__button"
        onClick={() => dispatch(todosRemove(id))}
      >
        Remove
      </button>
    </li>
  );
};
