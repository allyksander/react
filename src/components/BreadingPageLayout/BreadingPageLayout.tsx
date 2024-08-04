import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { IPageLayout } from "./types";
import { LoadingLayout } from "@components/LoadingLayout/LoadingLayout";

export const BreadingPageLayout = <T,>({
  isLoading,
  isError,
  data,
  List,
}: IPageLayout<T>) => (
  <LoadingLayout isLoading={isLoading} isError={isError} data={data}>
    {Array.isArray(data) && data.length !== 0 ? (
      <PaginatedItems data={data} List={List} />
    ) : (
      <TitlePlaceholder text="There are no any data..." />
    )}
  </LoadingLayout>
);
