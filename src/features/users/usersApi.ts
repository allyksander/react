import { baseApi } from "@redux/api/baseApi";
import { AppRoutes } from "@constants/routes";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";
import { UserType } from "./components/UsersCard/types";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[] | UserType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.users.path),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = usersApi;
