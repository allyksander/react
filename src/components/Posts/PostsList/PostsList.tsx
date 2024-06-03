import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { useGetPostsQuery } from "@redux/api/jsonPlaceholderApi";
import "./PostsList.scss";

export const PostsList = () => {
  const { data } = useGetPostsQuery();

  return data?.length ? (
    <ul className="post-list">
      {data.map(({ id, title }) => (
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
};
