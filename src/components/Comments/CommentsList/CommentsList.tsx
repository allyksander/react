import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { useGetCommentsQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import "./CommentsList.scss";

export const CommentsList = () => {
  const { data, isLoading } = useGetCommentsQuery();

  if (isLoading) {
    return <Loader />;
  }

  return Array.isArray(data) ? (
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
  ) : (
    <h2>There are no any comments</h2>
  );
};
