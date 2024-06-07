export type ICardLayout<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T[] | T | undefined;
  breadcrumbsText: string | undefined;
  Card: ({ data }: { data: T }) => JSX.Element | null;
};
