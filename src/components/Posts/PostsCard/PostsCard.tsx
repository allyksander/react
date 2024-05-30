import { PostType } from "./types";
import { Card } from "@components/Card/Card";
import "./PostsCard.scss";

export const PostsCard = () => {
  const { title, body }: PostType = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  return (
    <Card>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
