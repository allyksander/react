import { useGetCommentsQuery } from "@redux/api/jsonPlaceholderApi";
import { BreadingPageLayout } from "@components/BreadingPageLayout/BreadingPageLayout";
import { CommentsList } from "../CommentsList/CommentsList";

export const CommentsListWrap = () => {
  const { data, isLoading, isError } = useGetCommentsQuery();

  return (
    <BreadingPageLayout
      data={data}
      isLoading={isLoading}
      isError={isError}
      List={CommentsList}
    />
  );
};
