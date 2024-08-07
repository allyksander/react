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
import { PostsDetail } from "@features/posts/components/PostsDetail/PostsDetail";
import { CreatePost } from "@features/posts/components/CreatePost/CreatePost";
import { EditPost } from "@features/posts/components/EditPost/EditPost";
import { CommentsDetail } from "@features/comments/components/CommentsDetail/CommentsDetail";
import { AlbumsDetail } from "@features/albums/components/AlbumsDetail/AlbumsDetail";
import { PhotosDetail } from "@features/photos/components/PhotosDetail/PhotosDetail";
import { TodosDetail } from "@features/todos/components/TodosDetail/TodosDetail";
import { UsersDetail } from "@features/users/components/UsersDetail/UsersDetail";
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
        <Route path=":id" element={<PostsDetail />} />
        <Route
          path="create"
          handle={{
            breadcrumb: "Create",
          }}
          element={<CreatePost />}
        />
        <Route
          path="edit/:id"
          handle={{
            breadcrumb: "Edit",
          }}
          element={<EditPost />}
        />
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
        <Route path=":id" element={<CommentsDetail />} />
      </Route>
      <Route
        path={AppRoutes.ALBUMS}
        element={<BreadingPage path={AppRoutes.ALBUMS} basePage={<Albums />} />}
        handle={{
          breadcrumb: "Albums",
        }}
      >
        <Route path=":id" element={<AlbumsDetail />} />
      </Route>
      <Route
        path={AppRoutes.PHOTOS}
        element={<BreadingPage path={AppRoutes.PHOTOS} basePage={<Photos />} />}
        handle={{
          breadcrumb: "Photos",
        }}
      >
        <Route path=":id" element={<PhotosDetail />} />
      </Route>
      <Route
        path={AppRoutes.TODOS}
        element={<BreadingPage path={AppRoutes.TODOS} basePage={<Todos />} />}
        handle={{
          breadcrumb: "Todos",
        }}
      >
        <Route path=":id" element={<TodosDetail />} />
      </Route>
      <Route
        path={AppRoutes.USERS}
        element={<BreadingPage path={AppRoutes.USERS} basePage={<Users />} />}
        handle={{
          breadcrumb: "Users",
        }}
      >
        <Route path=":id" element={<UsersDetail />} />
      </Route>
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Route>
  )
);

export const App = (): JSX.Element => <RouterProvider router={router} />;
