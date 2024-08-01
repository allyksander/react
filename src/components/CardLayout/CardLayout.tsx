import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { ICardLayout } from "./type";
import { PageHead } from "@components/PageHead/PageHead";

export const CardLayout = <T extends { id: number }>({
  isLoading,
  isError,
  data,
  Card,
  breadcrumbsText,
}: ICardLayout<T>) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    !Array.isArray(data) && (
      <div className="card">
        <PageHead lastBreadcrumbsText={breadcrumbsText} />
        <Card data={data} />
      </div>
    )
  );
};
