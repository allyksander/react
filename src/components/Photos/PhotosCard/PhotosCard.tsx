import { useParams } from "react-router-dom";
import { useGetPhotosQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Card } from "@components/Card/Card";
import { Loader } from "@components/Loader/Loader";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import "./PhotosCard.scss";

export const PhotosCard = () => {
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
    <>
      <Breadcrumbs lastItemText={title} />
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
    </>
  );
};
