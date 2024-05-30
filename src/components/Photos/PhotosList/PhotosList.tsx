import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { PhotosListProps } from "./types";
import "./PhotosList.scss";

export const PhotosList = ({ photosList }: PhotosListProps) =>
  photosList?.length ? (
    <ul className="photo-list">
      {photosList.map(({ id, title, thumbnailUrl }) => (
        <li className="photo-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.PHOTOS}/${id}`}>
            <figure>
              <img src={thumbnailUrl} alt={title} loading="lazy" />
              <figcaption>
                <h3>{title}</h3>
              </figcaption>
            </figure>
          </Link>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>There are no any photos</h2>
  );
