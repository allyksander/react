import { baseApi } from "@redux/api/baseApi";
import { AppRoutes } from "@constants/routes";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";
import { AlbumType } from "./components/AlbumsCard/types";

const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlbums: builder.query<AlbumType[] | AlbumType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.ALBUMS),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAlbumsQuery } = albumsApi;
