import { ITodoItem } from "./type";
import "./TodoItem.scss";

export const TodoItem = ({
  props: { id, completed, title },
}: {
  props: ITodoItem;
}) => (
  <li className="todo-item" key={id}>
    <label className="todo-item__label">
      <input type="checkbox" name="" checked={completed} />
      <span className="todo-item__title">{title}</span>
    </label>
    <button className="todo-item__button">Remove</button>
  </li>
);
