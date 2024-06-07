import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "@redux/api/jsonPlaceholderApi";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import { CardLayout } from "@components/CardLayout/CardLayout";
import { CommentsCard } from "../CommentsCard/CommentsCard";

export const CommentsDetail = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetCommentsQuery(id);
  const cardData = getItemFromEndpoint(data);

  return (
    <CardLayout
      isLoading={isLoading}
      isError={isError}
      data={data}
      breadcrumbsText={cardData?.name}
      Card={CommentsCard}
    />
  );
};
