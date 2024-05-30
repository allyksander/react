import { Card } from "@components/Card/Card";
import { AlbumType } from "./types";
import "./AlbumsCard.scss";

export const AlbumsCard = () => {
  const { title }: AlbumType = {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim",
  };

  return (
    <Card>
      <h1>{title}</h1>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
