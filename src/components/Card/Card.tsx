import { Link } from "react-router-dom";
import { CardType } from "./types";

export const Card = ({ children }: CardType) => (
  <>
    <Link to={"../"}>Back to breading page</Link>
    <br />
    <br />
    {children}
  </>
);
