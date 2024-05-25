import { TodosItem as TodosItemType } from "./type";
import { useActions } from "@redux/hooks/useActions";
import "./TodosItem.scss";

export const TodosItem = ({
  props: { id, completed, title },
}: {
  props: TodosItemType;
}) => {
  const { updateTodosItem, removeTodosItem } = useActions();

  return (
    <li className="todos-item" key={id}>
      <label className="todos-item__label">
        <input
          type="checkbox"
          name=""
          checked={completed}
          onChange={() => updateTodosItem(id)}
          className="todos-item__checkbox"
        />
        <span className="todos-item__title">{title}</span>
      </label>
      <button
        className="todos-item__button"
        onClick={() => removeTodosItem(id)}
      >
        Remove
      </button>
    </li>
  );
};
