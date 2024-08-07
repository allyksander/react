import { baseApi } from "@redux/api/baseApi";
import { AppRoutes } from "@constants/routes";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";
import { TodosType } from "./components/TodosCard/types";

const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodosType[] | TodosType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.TODOS),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTodosQuery } = albumsApi;
