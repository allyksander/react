import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { AlbumsListProps } from "./types";
import "./AlbumsList.scss";

export const AlbumsList = ({ albumsList }: AlbumsListProps) =>
  albumsList?.length ? (
    <ul className="albums-list">
      {albumsList.map(({ id, title }) => (
        <li className="albums-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.ALBUMS}/${id}`}>
            <h3>{title}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>There are no any albums</h2>
  );
