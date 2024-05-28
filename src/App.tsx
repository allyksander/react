import { TodosForm } from "@components/TodosForm/TodosForm";
import { TodosList } from "@components/TodosList/TodosList";
import { RootPovider } from "@redux/RootProvider/RootProvider";
import "./index.scss";

export const App = (): JSX.Element => (
  <RootPovider>
    <TodosForm />
    <hr />
    <TodosList />
  </RootPovider>
);
