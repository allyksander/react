import { ReactElement } from "react";

export type IListCardLayout = {
  cardLink: string;
  editLink: string;
  removeHandler: VoidFunction;
  children?: ReactElement | ReactElement[];
};
