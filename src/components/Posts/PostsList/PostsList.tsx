import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { PostsListProps } from "./types";
import "./PostsList.scss";

export const PostsList = ({ postsList }: PostsListProps) =>
  postsList?.length ? (
    <ul className="post-list">
      {postsList.map(({ id, title }) => (
        <li className="post-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.POSTS}/${id}`}>
            <h3>{title}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>There are no any posts</h2>
  );
