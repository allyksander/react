import "./PostsCard.scss";
import { PostType } from "./types";

export const PostsCard = ({ data }: { data: PostType }) => {
  const { title, body } = data;

  return (
    <>
      <h1>{title}</h1>
      <h2>{body}</h2>
    </>
  );
};
