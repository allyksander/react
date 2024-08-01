import { AppRoutes } from "@constants/routes";
import { PostType } from "../PostsCard/types";
import { useDeletePostMutation } from "@redux/api/jsonPlaceholderApi";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import "./PostsList.scss";

export const PostsList = ({ data }: { data: PostType[] }) => {
  const [deletePost] = useDeletePostMutation();

  return data.length ? (
    <ul className="posts-list">
      {data.map(({ id, title }) => (
        <li className="posts-list__item" key={id}>
          <ListCardLayout
            cardLink={`${AppRoutes.POSTS}/${id}`}
            editLink={`${AppRoutes.POSTS}/edit/${id}`}
            removeHandler={() => deletePost(id)}
          >
            <h3>{title}</h3>
          </ListCardLayout>
        </li>
      ))}
    </ul>
  ) : null;
};
