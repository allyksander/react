import { PhotoType } from "./types";
import "./PhotosCard.scss";

export const PhotosCard = ({ data }: { data: PhotoType }) => {
  const { title, url } = data;

  return (
    <figure>
      <img src={url} alt={title} loading="lazy" />
      <figcaption>
        <h1>{title}</h1>
      </figcaption>
    </figure>
  );
};
