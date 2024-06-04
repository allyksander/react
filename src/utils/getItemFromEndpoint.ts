export const getItemFromEndpoint = <T>(data: T[] | T) =>
  Array.isArray(data) ? data[0] : data;
