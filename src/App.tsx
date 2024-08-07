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
        breadcrumb: AppRoutes.main.text,
      }}
    >
      <Route
        path={AppRoutes.main.path}
        element={<Main />}
        handle={{
          breadcrumb: AppRoutes.main.text,
        }}
      />
      <Route
        path={AppRoutes.posts.path}
        element={
          <BreadingPage path={AppRoutes.posts.path} basePage={<Posts />} />
        }
        handle={{
          breadcrumb: AppRoutes.posts.text,
        }}
      >
        <Route path=":id" element={<PostsDetail />} />
        <Route
          path={AppRoutes.create.path}
          handle={{
            breadcrumb: AppRoutes.create.text,
          }}
          element={<CreatePost />}
        />
        <Route
          path={`${AppRoutes.edit.path}/:id`}
          handle={{
            breadcrumb: AppRoutes.edit.path,
          }}
          element={<EditPost />}
        />
      </Route>
      <Route
        path={AppRoutes.comments.path}
        element={
          <BreadingPage
            path={AppRoutes.comments.text}
            basePage={<Comments />}
          />
        }
        handle={{
          breadcrumb: AppRoutes.comments.text,
        }}
      >
        <Route path=":id" element={<CommentsDetail />} />
      </Route>
      <Route
        path={AppRoutes.albums.path}
        element={
          <BreadingPage path={AppRoutes.albums.text} basePage={<Albums />} />
        }
        handle={{
          breadcrumb: AppRoutes.albums.text,
        }}
      >
        <Route path=":id" element={<AlbumsDetail />} />
      </Route>
      <Route
        path={AppRoutes.photos.path}
        element={
          <BreadingPage path={AppRoutes.photos.text} basePage={<Photos />} />
        }
        handle={{
          breadcrumb: AppRoutes.photos.text,
        }}
      >
        <Route path=":id" element={<PhotosDetail />} />
      </Route>
      <Route
        path={AppRoutes.todos.path}
        element={
          <BreadingPage path={AppRoutes.todos.text} basePage={<Todos />} />
        }
        handle={{
          breadcrumb: AppRoutes.todos.text,
        }}
      >
        <Route path=":id" element={<TodosDetail />} />
      </Route>
      <Route
        path={AppRoutes.users.path}
        element={
          <BreadingPage path={AppRoutes.users.text} basePage={<Users />} />
        }
        handle={{
          breadcrumb: AppRoutes.users.text,
        }}
      >
        <Route path=":id" element={<UsersDetail />} />
      </Route>
      <Route path={AppRoutes.notFound.path} element={<NotFound />} />
    </Route>
  )
);

export const App = () => <RouterProvider router={router} />;
