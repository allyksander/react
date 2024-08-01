import { ICardLayout } from "./type";
import { PageHead } from "@components/PageHead/PageHead";
import { LoadingPlaceholder } from "@components/LoadingPlaceholder/LoadingPlaceholder";

export const CardLayout = <T extends { id: number }>({
  isLoading,
  isError,
  data,
  Card,
  breadcrumbsText,
}: ICardLayout<T>) => {
  <LoadingPlaceholder isLoading={isLoading} isError={isError} data={data} />;

  if (data && !Array.isArray(data)) {
    return (
      <div className="card">
        <PageHead lastBreadcrumbsText={breadcrumbsText} />
        <Card data={data} />
      </div>
    );
  }
};
