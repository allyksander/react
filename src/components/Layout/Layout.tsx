import { NavLink, Outlet } from "react-router-dom";
import { AppRoutes } from "@constants/routes";

export const Layout = () => (
  <div className="app">
    <nav className="app-menu">
      <ul className="app-menu__list">
        <li className="app-menu__item">
          <NavLink to={AppRoutes.MAIN} className="app-menu__link">
            Main
          </NavLink>
        </li>
        <li className="app-menu__item">
          <NavLink to={AppRoutes.POSTS} className="app-menu__link">
            Posts
          </NavLink>
        </li>
        <li className="app-menu__item">
          <NavLink to={AppRoutes.COMMENTS} className="app-menu__link">
            Comments
          </NavLink>
        </li>
        <li className="app-menu__item">
          <NavLink to={AppRoutes.ALBUMS} className="app-menu__link">
            Albums
          </NavLink>
        </li>
        <li className="app-menu__item">
          <NavLink to={AppRoutes.PHOTOS} className="app-menu__link">
            Photos
          </NavLink>
        </li>
        <li className="app-menu__item">
          <NavLink to={AppRoutes.TODOS} className="app-menu__link">
            Todos
          </NavLink>
        </li>
        <li className="app-menu__item">
          <NavLink to={AppRoutes.USERS} className="app-menu__link">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="app-container">
      <Outlet />
    </div>
  </div>
);
