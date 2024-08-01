import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import "./PageHead.scss";

export const PageHead = ({
  lastBreadcrumbsText,
}: {
  lastBreadcrumbsText?: string;
}) => (
  <div className="page-head">
    <Breadcrumbs lastItemText={lastBreadcrumbsText} />
    <Link to={"../"} className="page-head__link">
      Back to breading page
    </Link>
  </div>
);
