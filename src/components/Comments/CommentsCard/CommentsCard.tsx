import { CommentType } from "./types";
import { Card } from "@components/Card/Card";
import "./CommentsCard.scss";

export const CommentsCard = () => {
  const { name, email, body }: CommentType = {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  };

  return (
    <Card>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{body}</h3>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
