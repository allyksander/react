import { ILoadingPlaceholder } from "./types";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { NotFound } from "@pages/NotFound/NotFound";

export const LoadingPlaceholder = <T,>({
  isLoading,
  isError,
  data,
}: ILoadingPlaceholder<T>) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  if (!data) {
    return <NotFound />;
  }
};
