import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { useGetUsersQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import "./UsersList.scss";

export const UsersList = () => {
  const { data, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }

  return Array.isArray(data) ? (
    <ul className="user-list">
      {data.map(({ id, name }) => (
        <li className="user-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.USERS}/${id}`}>
            <h3>{name}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>There are no any users</h2>
  );
};
