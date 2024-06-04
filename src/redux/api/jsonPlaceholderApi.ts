import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppRoutes } from "@constants/routes";
import { PostType } from "@components/Posts/PostsCard/types";
import { CommentType } from "@components/Comments/CommentsCard/types";
import { AlbumType } from "@components/Albums/AlbumsCard/types";
import { PhotoType } from "@components/Photos/PhotoCard/types";
import { TodosType } from "@components/Todos/TodosCard/types";
import { UserType } from "@components/Users/UsersCard/types";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[] | PostType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.POSTS),
    }),
    getComments: builder.query<CommentType[] | CommentType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.COMMENTS),
    }),
    getAlbums: builder.query<AlbumType[] | AlbumType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.ALBUMS),
    }),
    getPhotos: builder.query<PhotoType[] | PhotoType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.PHOTOS),
    }),
    getTodos: builder.query<TodosType[] | TodosType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.TODOS),
    }),
    getUsers: builder.query<UserType[] | UserType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.USERS),
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
