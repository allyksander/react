import { useGetPhotosQuery } from "@redux/api/jsonPlaceholderApi";
import { BreadingPageLayout } from "@components/BreadingPageLayout/BreadingPageLayout";
import { PhotosList } from "../PhotosList/PhotosList";

export const PhotosListWrap = () => {
  const { data, isLoading, isError } = useGetPhotosQuery();

  return (
    <BreadingPageLayout
      data={data}
      isLoading={isLoading}
      isError={isError}
      List={PhotosList}
    />
  );
};
