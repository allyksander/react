import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "@redux/api/jsonPlaceholderApi";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import { CardLayout } from "@components/CardLayout/CardLayout";
import { PostsCard } from "../PostsCard/PostsCard";

export const PostsDetail = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetPostsQuery(id);
  const cardData = getItemFromEndpoint(data);

  console.log(id);

  return (
    <CardLayout
      isLoading={isLoading}
      isError={isError}
      data={data}
      breadcrumbsText={cardData?.title}
      Card={PostsCard}
    />
  );
};
