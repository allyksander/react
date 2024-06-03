export const getDataById = <T extends { id: number }>(data: T[], id: string) =>
  data.find((item) => item?.id.toString() === id);
