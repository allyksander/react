import { useParams } from "react-router-dom";
import { useGetAlbumsQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { Card } from "@components/Card/Card";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import "./AlbumsCard.scss";

export const AlbumsCard = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetAlbumsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

  const { title } = getItemFromEndpoint(data);

  return (
    <>
      <Breadcrumbs lastItemText={title} />
      <Card>
        <h1>{title}</h1>
        <button>Edit</button>
        <button>Remove</button>
      </Card>
    </>
  );
};
