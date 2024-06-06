export type IPageLayout<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T[] | T | undefined;
  List: ({ data }: { data: T[] }) => JSX.Element | null;
};
