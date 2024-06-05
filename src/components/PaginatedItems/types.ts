export type IPaginatedItems<T> = {
  itemsPerPage?: number;
  data: T[];
  List: ({ data }: { data: T[] }) => JSX.Element | null;
};
