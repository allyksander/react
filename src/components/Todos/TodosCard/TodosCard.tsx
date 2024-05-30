import { Card } from "@components/Card/Card";
import { TodosType } from "./types";
import "./TodosCard.scss";

export const TodosCard = () => {
  const { title, completed }: TodosType = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return (
    <Card>
      <label>
        <input type="checkbox" name="" id="" checked={completed} />
        <h1>{title}</h1>
      </label>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
