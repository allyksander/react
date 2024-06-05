import { useGetAlbumsQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { AlbumsList } from "../AlbumsList/AlbumsList";

export const AlbumsListWrap = () => {
  const { data, isLoading, isError } = useGetAlbumsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={AlbumsList} />
  ) : (
    <TitlePlaceholder text="There are no any albums" />
  );
};
