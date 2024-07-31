import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppRoutes } from "@constants/routes";
import { PostType } from "@components/Posts/PostsCard/types";
import { CommentType } from "@components/Comments/CommentsCard/types";
import { AlbumType } from "@components/Albums/AlbumsCard/types";
import { PhotoType } from "@components/Photos/PhotosCard/types";
import { TodosType } from "@components/Todos/TodosCard/types";
import { UserType } from "@components/Users/UsersCard/types";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[] | PostType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.POSTS),
      providesTags: (result) =>
        Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id } as const)),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    deletePost: builder.mutation<PostType, number>({
      query: (id) => ({
        url: `${AppRoutes.POSTS}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    createPost: builder.mutation<PostType, PostType>({
      query: (data) => ({
        url: `${AppRoutes.POSTS}`,
        body: data,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    editPost: builder.mutation<
      PostType,
      Pick<PostType, "id" | "title" | "body">
    >({
      query: ({ id, title, body }) => ({
        url: `${AppRoutes.POSTS}/${id}`,
        body: { title, body },
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
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
  useDeletePostMutation,
  useCreatePostMutation,
  useEditPostMutation,
  useGetCommentsQuery,
  useGetAlbumsQuery,
  useGetPhotosQuery,
  useGetTodosQuery,
  useGetUsersQuery,
} = jsonPlaceholderApi;
