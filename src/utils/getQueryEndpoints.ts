export const getQueryEndpoints = (id: string | void, route: string) =>
  id ? `${route}/${id}` : route;
