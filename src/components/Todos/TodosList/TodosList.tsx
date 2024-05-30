import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { TodosListProps } from "./types";
import "./TodosList.scss";

export const TodosList = ({ todosList }: TodosListProps) =>
  todosList?.length ? (
    <ul className="todos-list">
      {todosList.map(({ id, title }) => (
        <li className="todos-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.TODOS}/${id}`}>
            <h3>{title}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>There are no any todos</h2>
  );
