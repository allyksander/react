import { ReactElement } from "react";

export type IFormPageLayout = {
  lastBreadcrumbsText: string;
  pageTitle: string;
  isSubmitSuccessful: boolean;
  submitedFormPlacehoderText: string;
  children?: ReactElement | ReactElement[];
};
