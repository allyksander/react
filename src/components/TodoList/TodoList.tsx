import { TodoItem } from "@components/TodoItem/TodoItem";
import { ITodoItem } from "@components/TodoItem/type";
import "./TodoList.scss";

export const TodoList = ({
  todoList = [],
}: {
  todoList?: ITodoItem[];
}): JSX.Element => (
  <div className="todo-list__wrap">
    {todoList.length === 0 ? (
      <h1 className="todo-list__placeholder">There are not any todos...</h1>
    ) : (
      <ul className="todo-list">
        {todoList.map((item) => (
          <TodoItem props={item} key={item.id} />
        ))}
      </ul>
    )}
  </div>
);
