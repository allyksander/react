import { NavLink, Outlet } from "react-router-dom";
import { AppMenu } from "@constants/routes";

export const Layout = () => (
  <div className="app">
    <nav className="app-menu">
      <ul className="app-menu__list">
        {AppMenu.map(({ path, text }) => (
          <li className="app-menu__item" key={`${path}-${text}`}>
            <NavLink to={path} className="app-menu__link">
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <div className="app-container">
      <Outlet />
    </div>
  </div>
);
