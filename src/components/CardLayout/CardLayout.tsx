import { Link } from "react-router-dom";
import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { ICardLayout } from "./type";

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
        <Breadcrumbs lastItemText={breadcrumbsText} />
        <Link to={"../"}>Back to breading page</Link>
        <br />
        <br />
        <Card data={data} />
      </div>
    )
  );
};
