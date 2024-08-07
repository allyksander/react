import { AlbumType } from "./types";
import "./AlbumsCard.scss";

export const AlbumsCard = ({ data }: { data: AlbumType }) => {
  const { title } = data;

  return <h1>{title}</h1>;
};
