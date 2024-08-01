import { AppRoutes } from "@constants/routes";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import { TodosType } from "../TodosCard/types";
import "./TodosList.scss";

export const TodosList = ({ data }: { data: TodosType[] }) => {
  return Array.isArray(data) ? (
    <ul className="todos-list">
      {data.map(({ id, title }) => (
        <li className="todos-list__item" key={id}>
          <ListCardLayout
            cardLink={`${AppRoutes.TODOS}/${id}`}
            editLink={`${AppRoutes.TODOS}/edit/${id}`}
            removeHandler={() => {}}
          >
            <h3>{title}</h3>
          </ListCardLayout>
        </li>
      ))}
    </ul>
  ) : null;
};
