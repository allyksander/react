import { useParams } from "react-router-dom";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import { CardLayout } from "@components/CardLayout/CardLayout";
import { PostsCard } from "../PostsCard/PostsCard";
import { useGetPostsQuery } from "@features/posts/postsApi";

export const PostsDetail = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetPostsQuery(id);
  const cardData = getItemFromEndpoint(data);

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
