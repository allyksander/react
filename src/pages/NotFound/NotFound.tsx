import { AppRoutes } from "@constants/routes";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => (
  <div className="not-found">
    <h1>Sorry, we can't find this page...</h1>
    <Link to={AppRoutes.MAIN} className="not-found__link">
      Go to Main page
    </Link>
  </div>
);
