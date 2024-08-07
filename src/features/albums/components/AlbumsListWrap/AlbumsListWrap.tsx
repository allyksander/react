import { useGetAlbumsQuery } from "@features/albums/albumsApi";
import { BreadingPageLayout } from "@components/BreadingPageLayout/BreadingPageLayout";
import { AlbumsList } from "../AlbumsList/AlbumsList";

export const AlbumsListWrap = () => {
  const { data, isLoading, isError } = useGetAlbumsQuery();

  return (
    <BreadingPageLayout
      data={data}
      isLoading={isLoading}
      isError={isError}
      List={AlbumsList}
    />
  );
};
