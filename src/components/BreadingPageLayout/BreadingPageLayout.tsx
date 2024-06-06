import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { IPageLayout } from "./types";

export const BreadingPageLayout = <T,>({
  isLoading,
  isError,
  data,
  List,
}: IPageLayout<T>) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={List} />
  ) : (
    <TitlePlaceholder text="There are no any data..." />
  );
};
