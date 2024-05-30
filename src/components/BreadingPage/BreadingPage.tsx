import { Outlet, useMatch } from "react-router-dom";
import { IBreadingPage } from "./types";

export const BreadingPage = ({ basePage, path }: IBreadingPage) => {
  const isMatch = useMatch(path);

  return (
    <>
      {isMatch && <>{basePage}</>}
      <Outlet />
    </>
  );
};
