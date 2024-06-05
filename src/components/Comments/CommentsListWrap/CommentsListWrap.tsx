import { useGetCommentsQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { CommentsList } from "../CommentsList/CommentsList";

export const CommentsListWrap = () => {
  const { data, isLoading, isError } = useGetCommentsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={CommentsList} />
  ) : (
    <TitlePlaceholder text="There are no any comments" />
  );
};
