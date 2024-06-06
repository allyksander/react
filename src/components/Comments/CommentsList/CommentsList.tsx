import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { CommentType } from "../CommentsCard/types";
import "./CommentsList.scss";

export const CommentsList = ({ data }: { data: CommentType[] }) =>
  data.length ? (
    <ul className="comments-list">
      {data.map(({ id, name }) => (
        <li className="comments-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.COMMENTS}/${id}`}>
            <h3>{name}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : null;
