import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { useGetTodosQuery } from "@redux/api/jsonPlaceholderApi";
import "./TodosList.scss";

export const TodosList = () => {
  const { data } = useGetTodosQuery();

  return data?.length ? (
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
  ) : (
    <h2>There are no any todos</h2>
  );
};
