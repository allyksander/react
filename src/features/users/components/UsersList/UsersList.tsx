import { AppRoutes } from "@constants/routes";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import { UserType } from "../UsersCard/types";
import "./UsersList.scss";

const path = AppRoutes.users;

export const UsersList = ({ data }: { data: UserType[] }) =>
  data.length ? (
    <ul className="users-list">
      {data.map(({ id, name }) => (
        <li className="users-list__item" key={id}>
          <ListCardLayout
            cardLink={`${path}/${id}`}
            editLink={`${path}/${AppRoutes.edit.path}/${id}`}
            removeHandler={() => {}}
          >
            <h3>{name}</h3>
          </ListCardLayout>
        </li>
      ))}
    </ul>
  ) : null;
