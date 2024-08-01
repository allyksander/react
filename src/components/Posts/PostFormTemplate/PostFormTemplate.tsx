import { useForm } from "react-hook-form";
import { PostType } from "../PostsCard/types";
import { InputField } from "@components/InputField/InputField";
import { IPostFormTemplate } from "./types";
import { FormPageLayout } from "@components/FormPageLayout/FormPageLayout";

export const PostFormTemplate = ({
  lastBreadcrumbsText,
  pageTitle,
  formData,
  formSubmitHandler,
  formSubmitButtonText = "Submit",
  submitedFormPlacehoderText,
}: IPostFormTemplate) => {
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    handleSubmit,
  } = useForm<PostType>();

  return (
    <FormPageLayout
      lastBreadcrumbsText={lastBreadcrumbsText}
      pageTitle={pageTitle}
      isSubmitSuccessful={isSubmitSuccessful}
      submitedFormPlacehoderText={submitedFormPlacehoderText}
    >
      <form
        action=""
        className="form"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <InputField
          tag="input"
          label="Title"
          register={register("title", {
            value: formData?.title,
            required: true,
          })}
          error={errors.title}
        />
        <InputField
          tag="textarea"
          label="Body"
          register={register("body", {
            value: formData?.body,
            required: true,
          })}
          error={errors.body}
        />
        <button type="submit" className="form__item-value form__submit">
          {formSubmitButtonText}
        </button>
      </form>
    </FormPageLayout>
  );
};
