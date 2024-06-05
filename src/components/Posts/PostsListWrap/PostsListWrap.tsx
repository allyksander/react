import { useGetPostsQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { PostsList } from "../PostsList/PostsList";

export const PostsListWrap = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={PostsList} />
  ) : (
    <TitlePlaceholder text="There are no any posts" />
  );
};
