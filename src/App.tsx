import { TodoForm } from "@components/TodoForm/TodoForm";
import "./index.scss";
import { TodoList } from "@components/TodoList/TodoList";

export const App = (): JSX.Element => (
  <>
    <TodoForm />
    <hr />
    <TodoList />
  </>
);
