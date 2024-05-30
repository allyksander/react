import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { UsersListProps } from "./types";
import "./UsersList.scss";

export const UsersList = ({ userssList }: UsersListProps) =>
  userssList?.length ? (
    <ul className="todos-list">
      {userssList.map(({ id, name }) => (
        <li className="todos-list__item" key={id}>
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
