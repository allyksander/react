import { baseApi } from "@redux/api/baseApi";
import { AppRoutes } from "@constants/routes";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";
import { CommentType } from "./components/CommentsCard/types";

const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<CommentType[] | CommentType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.COMMENTS),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCommentsQuery } = commentsApi;
