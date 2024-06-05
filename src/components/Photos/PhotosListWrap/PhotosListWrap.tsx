import { useGetPhotosQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { PhotosList } from "../PhotosList/PhotosList";

export const PhotosListWrap = () => {
  const { data, isLoading, isError } = useGetPhotosQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={PhotosList} />
  ) : (
    <TitlePlaceholder text="There are no any photos" />
  );
};
