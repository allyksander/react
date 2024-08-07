import { AppRoutes } from "@constants/routes";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import { CommentType } from "../CommentsCard/types";
import "./CommentsList.scss";

const path = AppRoutes.comments;

export const CommentsList = ({ data }: { data: CommentType[] }) =>
  data.length ? (
    <ul className="comments-list">
      {data.map(({ id, name }) => (
        <li className="comments-list__item" key={id}>
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
