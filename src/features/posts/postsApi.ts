import { baseApi } from "@redux/api/baseApi";
import { AppRoutes } from "@constants/routes";
import { PostType } from "./components/PostsCard/types";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";

export const postsApi = baseApi.injectEndpoints({
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
  }),
  overrideExisting: false,
});

export const {
  useGetPostsQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useEditPostMutation,
} = postsApi;
