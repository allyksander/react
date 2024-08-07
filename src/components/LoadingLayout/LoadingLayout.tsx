import { ILoadingLayout } from "./types";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { NotFound } from "@pages/NotFound/NotFound";
import { Link } from "react-router-dom";
import { AppRoutes } from "@constants/routes";

export const LoadingLayout = <T,>({
  isLoading,
  isError,
  data,
  children,
}: ILoadingLayout<T>) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError && !data) {
    return <NotFound />;
  }

  if (!isError && !data) {
    return (
      <>
        <ErrorPlacehoder />
        <Link to={AppRoutes.main.path}>Go to Main page</Link>
      </>
    );
  }

  return children;
};
