import { NavLink } from "react-router-dom";
import { ICreateButton } from "./types";
import "./CreateButton.scss";

export const CreateButton = ({ baseRoute, text }: ICreateButton) => (
  <NavLink to={`${baseRoute}/create`} className="create-button">
    {text}
  </NavLink>
);
