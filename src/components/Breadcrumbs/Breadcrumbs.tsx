import { Link, useMatches } from "react-router-dom";
import "./Breadcrumbs.scss";

type HandleType = {
  breadcrumb?: string;
};

export const Breadcrumbs = ({ lastItemText }: { lastItemText?: string }) => {
  const matches = useMatches();

  return (
    matches.length && (
      <ul className="breadcrumbs">
        {matches.map(({ handle, pathname, id }, index) => {
          const breadcrumbText =
            (handle as HandleType)?.breadcrumb || lastItemText || "...";

          return (
            <li className="breadcrumbs__item" key={id}>
              {index < matches.length - 1 ? (
                <>
                  <Link to={pathname} className="breadcrumbs__link">
                    {breadcrumbText}
                  </Link>
                  <span className="breadcrumbs__separate">/</span>
                </>
              ) : (
                <span className="breadcrumbs__endpoint">{breadcrumbText}</span>
              )}
            </li>
          );
        })}
      </ul>
    )
  );
};
