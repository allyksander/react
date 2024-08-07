import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { UsersListWrap } from "@features/users/components/UsersListWrap/UsersListWrap";

export const Users = () => (
  <>
    <Breadcrumbs />
    <h1>Users page</h1>
    <UsersListWrap />
  </>
);
