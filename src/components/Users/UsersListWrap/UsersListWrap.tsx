import { useGetUsersQuery } from "@redux/api/jsonPlaceholderApi";
import { Loader } from "@components/Loader/Loader";
import { ErrorPlacehoder } from "@components/ErrorPlacehoder/ErrorPlacehoder";
import { TitlePlaceholder } from "@components/TitlePlaceholder/TitlePlaceholder";
import { PaginatedItems } from "@components/PaginatedItems/PaginatedItems";
import { UsersList } from "../UsersList/UsersList";

export const UsersListWrap = () => {
  const { data, isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlacehoder />;
  }

  return Array.isArray(data) ? (
    <PaginatedItems data={data} List={UsersList} />
  ) : (
    <TitlePlaceholder text="There are no any users" />
  );
};
