import { AppRoutes } from "@constants/routes";
import { PostType } from "../PostsCard/types";
import { useDeletePostMutation } from "@features/posts/postsApi";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import "./PostsList.scss";

const path = AppRoutes.posts.path;

export const PostsList = ({ data }: { data: PostType[] }) => {
  const [deletePost] = useDeletePostMutation();

  return data.length ? (
    <ul className="posts-list">
      {data.map(({ id, title }) => (
        <li className="posts-list__item" key={id}>
          <ListCardLayout
            cardLink={`${path}/${id}`}
            editLink={`${path}/${AppRoutes.edit.path}/${id}`}
            removeHandler={() => deletePost(id)}
          >
            <h3>{title}</h3>
          </ListCardLayout>
        </li>
      ))}
    </ul>
  ) : null;
};
