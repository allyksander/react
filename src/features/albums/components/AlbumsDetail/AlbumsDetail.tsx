import { useParams } from "react-router-dom";
import { useGetAlbumsQuery } from "@features/albums/albumsApi";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import { CardLayout } from "@components/CardLayout/CardLayout";
import { AlbumsCard } from "../AlbumsCard/AlbumsCard";

export const AlbumsDetail = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetAlbumsQuery(id);
  const cardData = getItemFromEndpoint(data);

  return (
    <CardLayout
      isLoading={isLoading}
      isError={isError}
      data={data}
      breadcrumbsText={cardData?.title}
      Card={AlbumsCard}
    />
  );
};
