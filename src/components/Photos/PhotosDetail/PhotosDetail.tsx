import { useParams } from "react-router-dom";
import { useGetPhotosQuery } from "@redux/api/jsonPlaceholderApi";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import { CardLayout } from "@components/CardLayout/CardLayout";
import { PhotosCard } from "../PhotosCard/PhotosCard";

export const PhotosDetail = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetPhotosQuery(id);
  const cardData = getItemFromEndpoint(data);

  return (
    <CardLayout
      isLoading={isLoading}
      isError={isError}
      data={data}
      breadcrumbsText={cardData?.title}
      Card={PhotosCard}
    />
  );
};
