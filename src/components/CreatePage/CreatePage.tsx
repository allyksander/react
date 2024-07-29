import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const CreatePage = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => (
  <>
    <Breadcrumbs lastItemText="Create" />
    <Link to={"../"}>Back to breading page</Link>
    <br />
    <br />
    {children}
  </>
);
