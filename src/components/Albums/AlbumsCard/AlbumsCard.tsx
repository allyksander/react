import { useParams } from "react-router-dom";
import { useGetAlbumsQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { Card } from "@components/Card/Card";
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

  const { title } = Array.isArray(data) ? data[0] : data;

  return (
    <Card>
      <h1>{title}</h1>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
