import { CommentType } from "./types";
import "./CommentsCard.scss";

export const CommentsCard = ({ data }: { data: CommentType }) => {
  const { name, email, body } = data;

  return (
    <>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{body}</h3>
    </>
  );
};
