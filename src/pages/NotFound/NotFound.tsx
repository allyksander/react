import { AppRoutes } from "@constants/routes";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <>
    <span>NotFound page</span>
    <br />
    <br />
    <Link to={AppRoutes.MAIN}>Go to Main page</Link>
  </>
);
