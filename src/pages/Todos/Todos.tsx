import { TodosList } from "@components/Todos/TodosList/TodosList";

export const Todos = () => (
  <>
    <h1>Todos page</h1>
    <TodosList
      todosList={[
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
      ]}
    />
  </>
);
