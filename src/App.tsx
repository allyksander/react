import { RootPovider } from "./redux/RootPovider/RootPovider";
import { TodosForm } from "@components/TodosForm/TodosForm";
import { TodosList } from "@components/TodosList/TodosList";
import "./index.scss";

export const App = (): JSX.Element => (
  <RootPovider>
    <TodosForm />
    <hr />
    <TodosList />
  </RootPovider>
);
