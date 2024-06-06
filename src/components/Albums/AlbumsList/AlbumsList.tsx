import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { AlbumType } from "../AlbumsCard/types";
import "./AlbumsList.scss";

export const AlbumsList = ({ data }: { data: AlbumType[] }) =>
  data.length ? (
    <ul className="albums-list">
      {data.map(({ id, title }) => (
        <li className="albums-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.ALBUMS}/${id}`}>
            <h3>{title}</h3>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : null;
