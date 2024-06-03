import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "@redux/api/jsonPlaceholderApi";

export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});
