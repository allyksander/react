import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { Card } from "@components/Card/Card";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import "./PostsCard.scss";

export const PostsCard = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetPostsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

  const { title, body } = getItemFromEndpoint(data);

  return (
    <Card>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
