import { Card } from "@components/Card/Card";
import { PhotoType } from "./types";

export const PhotoCard = () => {
  const { title, url }: PhotoType = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  };

  return (
    <Card>
      <figure>
        <img src={url} alt={title} loading="lazy" />
        <figcaption>
          <h1>{title}</h1>
        </figcaption>
      </figure>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
