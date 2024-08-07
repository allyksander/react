import { useGetUsersQuery } from "@features/users/usersApi";
import { BreadingPageLayout } from "@components/BreadingPageLayout/BreadingPageLayout";
import { UsersList } from "../UsersList/UsersList";

export const UsersListWrap = () => {
  const { data, isLoading, isError } = useGetUsersQuery();

  return (
    <BreadingPageLayout
      data={data}
      isLoading={isLoading}
      isError={isError}
      List={UsersList}
    />
  );
};