import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { TodosListWrap } from "@features/todos/components/TodosListWrap/TodosListWrap";

export const Todos = () => (
  <>
    <Breadcrumbs />
    <h1>Todos page</h1>
    <TodosListWrap />
  </>
);
