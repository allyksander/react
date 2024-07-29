import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { PostType } from "../PostsCard/types";
import { useDeletePostMutation } from "@redux/api/jsonPlaceholderApi";
import "./PostsList.scss";

export const PostsList = ({ data }: { data: PostType[] }) => {
  const [deletePost] = useDeletePostMutation();

  return data.length ? (
    <ul className="posts-list">
      {data.map(({ id, title }) => (
        <li className="posts-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.POSTS}/${id}`}>
            <h3>{title}</h3>
          </Link>
          <button>Edit</button>
          <button onClick={() => deletePost(id)}>Remove</button>
        </li>
      ))}
    </ul>
  ) : null;
};
