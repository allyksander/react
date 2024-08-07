import { TodosType } from "./types";
import "./TodosCard.scss";

export const TodosCard = ({ data }: { data: TodosType }) => {
  const { title, completed } = data;

  return (
    <label>
      <input type="checkbox" name="" id="" checked={completed} />
      <h1>{title}</h1>
    </label>
  );
};
