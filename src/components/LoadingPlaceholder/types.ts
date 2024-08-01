export type ILoadingPlaceholder<T> = {
  isLoading: boolean;
  isError: boolean;
  data?: T | T[] | undefined;
};
