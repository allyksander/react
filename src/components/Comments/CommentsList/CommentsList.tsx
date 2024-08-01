import { AppRoutes } from "@constants/routes";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import { CommentType } from "../CommentsCard/types";
import "./CommentsList.scss";

export const CommentsList = ({ data }: { data: CommentType[] }) =>
  data.length ? (
    <ul className="comments-list">
      {data.map(({ id, name }) => (
        <li className="comments-list__item" key={id}>
          <ListCardLayout
            cardLink={`${AppRoutes.COMMENTS}/${id}`}
            editLink={`${AppRoutes.COMMENTS}/edit/${id}`}
            removeHandler={() => {}}
          >
            <h3>{name}</h3>
          </ListCardLayout>
        </li>
      ))}
    </ul>
  ) : null;
