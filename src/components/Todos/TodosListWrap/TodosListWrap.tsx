import { useGetTodosQuery } from "@redux/api/jsonPlaceholderApi";
import { BreadingPageLayout } from "@components/BreadingPageLayout/BreadingPageLayout";
import { TodosList } from "../TodosList/TodosList";

export const TodosListWrap = () => {
  const { data, isLoading, isError } = useGetTodosQuery();

  return (
    <BreadingPageLayout
      data={data}
      isLoading={isLoading}
      isError={isError}
      List={TodosList}
    />
  );
};
