import { ReactElement } from "react";

export type IFormPageLayout = {
  pageTitle: string;
  isSubmitSuccessful: boolean;
  submitedFormPlacehoderText: string;
  children?: ReactElement | ReactElement[];
};
