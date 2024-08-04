import { ReactElement } from "react";

export type ILoadingLayout<T> = {
  isLoading: boolean;
  isError: boolean;
  data?: T | T[] | undefined;
  children?: ReactElement | ReactElement[] | false;
};
