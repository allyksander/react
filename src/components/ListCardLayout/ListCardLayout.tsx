import { Link } from "react-router-dom";
import { IListCardLayout } from "./types";
import "./ListCardLayout.scss";

export const ListCardLayout = ({
  cardLink,
  editLink,
  removeHandler,
  children,
}: IListCardLayout) => {
  return (
    <div className="list-card">
      <Link className="list-card__link" to={cardLink}>
        {children}
      </Link>
      <div className="list-card__buttons">
        <Link to={editLink} className="list-card__button">
          Edit
        </Link>
        <button onClick={removeHandler} className="list-card__button">
          Remove
        </button>
      </div>
    </div>
  );
};
