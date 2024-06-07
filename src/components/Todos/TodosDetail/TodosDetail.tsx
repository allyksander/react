import { useParams } from "react-router-dom";
import { useGetTodosQuery } from "@redux/api/jsonPlaceholderApi";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import { CardLayout } from "@components/CardLayout/CardLayout";
import { TodosCard } from "../TodosCard/TodosCard";

export const TodosDetail = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetTodosQuery(id);
  const cardData = getItemFromEndpoint(data);

  return (
    <CardLayout
      isLoading={isLoading}
      isError={isError}
      data={data}
      breadcrumbsText={cardData?.title}
      Card={TodosCard}
    />
  );
};
