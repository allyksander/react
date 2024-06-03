import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppRoutes } from "@constants/routes";
import { PostType } from "@components/Posts/PostsCard/types";
import { CommentType } from "@components/Comments/CommentsCard/types";
import { AlbumType } from "@components/Albums/AlbumsCard/types";
import { PhotoType } from "@components/Photos/PhotoCard/types";
import { TodosType } from "@components/Todos/TodosCard/types";
import { UserType } from "@components/Users/UsersCard/types";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], void>({
      query: () => AppRoutes.POSTS,
    }),
    getComments: builder.query<CommentType[], void>({
      query: () => AppRoutes.COMMENTS,
    }),
    getAlbums: builder.query<AlbumType[], void>({
      query: () => AppRoutes.ALBUMS,
    }),
    getPhotos: builder.query<PhotoType[], void>({
      query: () => AppRoutes.PHOTOS,
    }),
    getTodos: builder.query<TodosType[], void>({
      query: () => AppRoutes.TODOS,
    }),
    getUsers: builder.query<UserType[], void>({
      query: () => AppRoutes.USERS,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetAlbumsQuery,
  useGetPhotosQuery,
  useGetTodosQuery,
  useGetUsersQuery,
} = jsonPlaceholderApi;
