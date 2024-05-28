import { useAppSelector } from "@redux/hooks/hooks";
import { TodosItem } from "@components/TodosItem/TodosItem";
import "./TodosList.scss";

export const TodosList = (): JSX.Element => {
  const todoList = useAppSelector((state) => state.todos.todos);

  return (
    <div className="todos-list__wrap">
      {todoList.length === 0 ? (
        <h1 className="todos-list__placeholder">There are not any todos...</h1>
      ) : (
        <ul className="todos-list">
          {todoList.map((item) => (
            <TodosItem props={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
