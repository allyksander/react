import { Link, Outlet, useMatch } from "react-router-dom";
import { IBreadingPage } from "./types";

export const BreadingPage = ({ basePage, path }: IBreadingPage) => {
  const isMatch = useMatch(path);

  return (
    <>
      {isMatch && (
        <>
          {basePage}
          <br />
          <br />
          <Link to="id">Go to detail card</Link>
        </>
      )}
      <Outlet />
    </>
  );
};
