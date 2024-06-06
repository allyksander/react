import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { PostType } from "../PostsCard/types";
import "./PostsList.scss";

export const PostsList = ({ data }: { data: PostType[] }) =>
  data.length ? (
    <ul className="posts-list">
      {data.map(({ id, title }) => (
        <li className="posts-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.POSTS}/${id}`}>
            <h3>{title}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : null;
