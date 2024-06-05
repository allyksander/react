import { NavLink, Route, Routes } from "react-router-dom";
import { Main } from "@pages/Main/Main";
import { AppRoutes } from "@constants/routes";
import { Posts } from "@pages/Posts/Posts";
import { Comments } from "@pages/Comments/Comments";
import { Albums } from "@pages/Albums/Albums";
import { Photos } from "@pages/Photos/Photos";
import { Todos } from "@pages/Todos/Todos";
import { Users } from "@pages/Users/Users";
import { NotFound } from "@pages/NotFound/NotFound";
import { BreadingPage } from "@components/BreadingPage/BreadingPage";
import { PostsCard } from "@components/Posts/PostsCard/PostsCard";
import { CommentsCard } from "@components/Comments/CommentsCard/CommentsCard";
import { AlbumsCard } from "@components/Albums/AlbumsCard/AlbumsCard";
import { PhotosCard } from "@components/Photos/PhotosCard/PhotosCard";
import { TodosCard } from "@components/Todos/TodosCard/TodosCard";
import { UsersCard } from "@components/Users/UsersCard/UsersCard";
import "./index.scss";

export const App = (): JSX.Element => (
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
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Main />} />
        <Route
          path={AppRoutes.POSTS}
          element={<BreadingPage path={AppRoutes.POSTS} basePage={<Posts />} />}
        >
          <Route path=":id" element={<PostsCard />} />
        </Route>
        <Route
          path={AppRoutes.COMMENTS}
          element={
            <BreadingPage path={AppRoutes.COMMENTS} basePage={<Comments />} />
          }
        >
          <Route path=":id" element={<CommentsCard />} />
        </Route>
        <Route
          path={AppRoutes.ALBUMS}
          element={
            <BreadingPage path={AppRoutes.ALBUMS} basePage={<Albums />} />
          }
        >
          <Route path=":id" element={<AlbumsCard />} />
        </Route>
        <Route
          path={AppRoutes.PHOTOS}
          element={
            <BreadingPage path={AppRoutes.PHOTOS} basePage={<Photos />} />
          }
        >
          <Route path=":id" element={<PhotosCard />} />
        </Route>
        <Route
          path={AppRoutes.TODOS}
          element={<BreadingPage path={AppRoutes.TODOS} basePage={<Todos />} />}
        >
          <Route path=":id" element={<TodosCard />} />
        </Route>
        <Route
          path={AppRoutes.USERS}
          element={<BreadingPage path={AppRoutes.USERS} basePage={<Users />} />}
        >
          <Route path=":id" element={<UsersCard />} />
        </Route>
        <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </div>
  </div>
);
