import { useGetTodosQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { TodosList } from "../TodosList/TodosList";

export const TodosListWrap = () => {
  const { data, isLoading, isError } = useGetTodosQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={TodosList} />
  ) : (
    <TitlePlaceholder text="There are no any todos" />
  );
};
