import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { TodosType } from "../TodosCard/types";
import "./TodosList.scss";

export const TodosList = ({ data }: { data: TodosType[] }) => {
  return Array.isArray(data) ? (
    <ul className="todos-list">
      {data.map(({ id, title }) => (
        <li className="todos-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.TODOS}/${id}`}>
            <h3>{title}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : null;
};
