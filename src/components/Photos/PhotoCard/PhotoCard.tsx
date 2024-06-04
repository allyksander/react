import { useParams } from "react-router-dom";
import { useGetPhotosQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Card } from "@components/Card/Card";
import { Loader } from "@components/Loader/Loader";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import "./PhotoCard.scss";

export const PhotoCard = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetPhotosQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

  const { title, url } = getItemFromEndpoint(data);

  return (
    <Card>
      <figure>
        <img src={url} alt={title} loading="lazy" />
        <figcaption>
          <h1>{title}</h1>
        </figcaption>
      </figure>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
