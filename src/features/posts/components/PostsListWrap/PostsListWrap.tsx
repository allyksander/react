import { useGetPostsQuery } from "@features/posts/postsApi";
import { BreadingPageLayout } from "@components/BreadingPageLayout/BreadingPageLayout";
import { PostsList } from "../PostsList/PostsList";

export const PostsListWrap = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  return (
    <BreadingPageLayout
      data={data}
      isLoading={isLoading}
      isError={isError}
      List={PostsList}
    />
  );
};