import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";

export const PageHead = ({
  lastBreadcrumbsText,
}: {
  lastBreadcrumbsText: string | undefined;
}) => (
  <>
    <Breadcrumbs lastItemText={lastBreadcrumbsText} />
    <Link to={"../"}>Back to breading page</Link>
    <br />
    <br />
  </>
);
