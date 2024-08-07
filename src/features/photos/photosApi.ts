import { baseApi } from "@redux/api/baseApi";
import { AppRoutes } from "@constants/routes";
import { getQueryEndpoints } from "@utils/getQueryEndpoints";
import { PhotoType } from "./components/PhotosCard/types";

const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPhotos: builder.query<PhotoType[] | PhotoType, void | string>({
      query: (id) => getQueryEndpoints(id, AppRoutes.PHOTOS),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPhotosQuery } = albumsApi;
