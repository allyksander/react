import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "@features/users/usersApi";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import { CardLayout } from "@components/CardLayout/CardLayout";
import { UsersCard } from "../UsersCard/UsersCard";

export const UsersDetail = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetUsersQuery(id);
  const cardData = getItemFromEndpoint(data);

  return (
    <CardLayout
      isLoading={isLoading}
      isError={isError}
      data={data}
      breadcrumbsText={cardData?.name}
      Card={UsersCard}
    />
  );
};
