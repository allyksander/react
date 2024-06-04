import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { Card } from "@components/Card/Card";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import "./CommentsCard.scss";

export const CommentsCard = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetCommentsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

  const { name, email, body } = getItemFromEndpoint(data);

  return (
    <Card>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{body}</h3>
      <button>Edit</button>
      <button>Remove</button>
    </Card>
  );
};
