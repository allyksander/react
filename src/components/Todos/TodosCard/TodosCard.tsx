import { useParams } from "react-router-dom";
import { useGetTodosQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { Card } from "@components/Card/Card";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import "./TodosCard.scss";

export const TodosCard = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetTodosQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

  const { title, completed } = getItemFromEndpoint(data);

  return (
    <>
      <Breadcrumbs lastItemText={title} />
      <Card>
        <label>
          <input type="checkbox" name="" id="" checked={completed} />
          <h1>{title}</h1>
        </label>
        <button>Edit</button>
        <button>Remove</button>
      </Card>
    </>
  );
};
