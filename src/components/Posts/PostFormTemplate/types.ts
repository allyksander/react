import { SubmitHandler } from "react-hook-form";
import { PostType } from "../PostsCard/types";

export type IPostFormTemplate = {
  lastBreadcrumbsText: string;
  pageTitle: string;
  formData?: PostType;
  formSubmitHandler: SubmitHandler<PostType>;
  formSubmitButtonText?: string;
  submitedFormPlacehoderText: string;
};
