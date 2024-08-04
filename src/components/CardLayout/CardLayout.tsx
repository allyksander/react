import { LoadingLayout } from "@components/LoadingLayout/LoadingLayout";
import { ICardLayout } from "./type";
import { PageHead } from "@components/PageHead/PageHead";

export const CardLayout = <T extends { id: number }>({
  isLoading,
  isError,
  data,
  Card,
  breadcrumbsText,
}: ICardLayout<T>) => (
  <LoadingLayout isLoading={isLoading} isError={isError} data={data}>
    {data && !Array.isArray(data) && (
      <div className="card">
        <PageHead lastBreadcrumbsText={breadcrumbsText} />
        <Card data={data} />
      </div>
    )}
  </LoadingLayout>
);
