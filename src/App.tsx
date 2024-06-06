import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Main } from "@pages/Main/Main";
import { AppRoutes } from "@constants/routes";
import { Posts } from "@pages/Posts/Posts";
import { Comments } from "@pages/Comments/Comments";
import { Albums } from "@pages/Albums/Albums";
import { Photos } from "@pages/Photos/Photos";
import { Todos } from "@pages/Todos/Todos";
import { Users } from "@pages/Users/Users";
import { NotFound } from "@pages/NotFound/NotFound";
import { Layout } from "@components/Layout/Layout";
import { BreadingPage } from "@components/BreadingPage/BreadingPage";
import { PostsCard } from "@components/Posts/PostsCard/PostsCard";
import { CommentsCard } from "@components/Comments/CommentsCard/CommentsCard";
import { AlbumsCard } from "@components/Albums/AlbumsCard/AlbumsCard";
import { PhotosCard } from "@components/Photos/PhotosCard/PhotosCard";
import { TodosCard } from "@components/Todos/TodosCard/TodosCard";
import { UsersCard } from "@components/Users/UsersCard/UsersCard";
import "./index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Layout />}
      handle={{
        breadcrumb: "Main",
      }}
    >
      <Route
        path={AppRoutes.MAIN}
        element={<Main />}
        handle={{
          breadcrumb: "Main",
        }}
      />
      <Route
        path={AppRoutes.POSTS}
        element={<BreadingPage path={AppRoutes.POSTS} basePage={<Posts />} />}
        handle={{
          breadcrumb: "Posts",
        }}
      >
        <Route path=":id" element={<PostsCard />} />
      </Route>
      <Route
        path={AppRoutes.COMMENTS}
        element={
          <BreadingPage path={AppRoutes.COMMENTS} basePage={<Comments />} />
        }
        handle={{
          breadcrumb: "Comments",
        }}
      >
        <Route path=":id" element={<CommentsCard />} />
      </Route>
      <Route
        path={AppRoutes.ALBUMS}
        element={<BreadingPage path={AppRoutes.ALBUMS} basePage={<Albums />} />}
        handle={{
          breadcrumb: "Albums",
        }}
      >
        <Route path=":id" element={<AlbumsCard />} />
      </Route>
      <Route
        path={AppRoutes.PHOTOS}
        element={<BreadingPage path={AppRoutes.PHOTOS} basePage={<Photos />} />}
        handle={{
          breadcrumb: "Photos",
        }}
      >
        <Route path=":id" element={<PhotosCard />} />
      </Route>
      <Route
        path={AppRoutes.TODOS}
        element={<BreadingPage path={AppRoutes.TODOS} basePage={<Todos />} />}
        handle={{
          breadcrumb: "Todos",
        }}
      >
        <Route path=":id" element={<TodosCard />} />
      </Route>
      <Route
        path={AppRoutes.USERS}
        element={<BreadingPage path={AppRoutes.USERS} basePage={<Users />} />}
        handle={{
          breadcrumb: "Users",
        }}
      >
        <Route path=":id" element={<UsersCard />} />
      </Route>
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Route>
  )
);

export const App = (): JSX.Element => <RouterProvider router={router} />;
