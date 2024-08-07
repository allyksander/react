import { AppRoutes } from "@constants/routes";
import { ListCardLayout } from "@components/ListCardLayout/ListCardLayout";
import { AlbumType } from "../AlbumsCard/types";
import "./AlbumsList.scss";

const path = AppRoutes.albums;

export const AlbumsList = ({ data }: { data: AlbumType[] }) =>
  data.length ? (
    <ul className="albums-list">
      {data.map(({ id, title }) => (
        <li className="albums-list__item" key={id}>
          <ListCardLayout
            cardLink={`${path}/${id}`}
            editLink={`${path}/${AppRoutes.edit.path}/${id}`}
            removeHandler={() => {}}
          >
            <h3>{title}</h3>
          </ListCardLayout>
        </li>
      ))}
    </ul>
  ) : null;
