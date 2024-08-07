import { baseApi } from "@redux/api/baseApi";
import { AppRoutes } from "@constants/routes";
import { PostType } from "./components/PostsCard/types";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";

const postPath = AppRoutes.posts.path;

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[] | PostType, void | string>({
      query: (id) => getQueryEndpoints(id, postPath),
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
        url: `${postPath}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    createPost: builder.mutation<PostType, PostType>({
      query: (data) => ({
        url: `${postPath}`,
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
        url: `${postPath}/${id}`,
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
