import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { useGetTodosQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import "./TodosList.scss";

export const TodosList = () => {
  const { data, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return <Loader />;
  }

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
  ) : (
    <h2>There are no any todos</h2>
  );
};
