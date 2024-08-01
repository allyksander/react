import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { IPageLayout } from "./types";
import { LoadingPlaceholder } from "@components/LoadingPlaceholder/LoadingPlaceholder";

export const BreadingPageLayout = <T,>({
  isLoading,
  isError,
  data,
  List,
}: IPageLayout<T>) => {
  <LoadingPlaceholder isLoading={isLoading} isError={isError} data={data} />;

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={List} />
  ) : (
    <TitlePlaceholder text="There are no any data..." />
  );
};
