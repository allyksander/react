import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import "./PhotosList.scss";
import { useGetPhotosQuery } from "@redux/api/jsonPlaceholderApi";

export const PhotosList = () => {
  const { data } = useGetPhotosQuery();

  return data?.length ? (
    <ul className="photo-list">
      {data.map(({ id, title, thumbnailUrl }) => (
        <li className="photo-list__item" key={id}>
          <Link className="link" to={`${AppRoutes.PHOTOS}/${id}`}>
            <figure>
              <img
                src={thumbnailUrl}
                width={150}
                height={150}
                alt={title}
                loading="lazy"
              />
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
};
