import { AppRoutes } from "@constants/routes";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import { PhotoType } from "../PhotosCard/types";
import "./PhotosList.scss";

export const PhotosList = ({ data }: { data: PhotoType[] }) => {
  return Array.isArray(data) ? (
    <ul className="photos-list">
      {data.map(({ id, title, thumbnailUrl }) => (
        <li className="photos-list__item" key={id}>
          <ListCardLayout
            cardLink={`${AppRoutes.PHOTOS}/${id}`}
            editLink={`${AppRoutes.PHOTOS}/edit/${id}`}
            removeHandler={() => {}}
          >
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
          </ListCardLayout>
        </li>
      ))}
    </ul>
  ) : null;
};
