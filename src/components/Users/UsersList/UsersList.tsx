import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { UserType } from "../UsersCard/types";
import "./UsersList.scss";

export const UsersList = ({ data }: { data: UserType[] }) =>
  data.length ? (
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
  ) : null;
