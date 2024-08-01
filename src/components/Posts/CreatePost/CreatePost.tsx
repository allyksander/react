import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputField } from "@components/InputField/InputField";
import { PageHead } from "@components/PageHead/PageHead";
import { PostType } from "../PostsCard/types";
import { AppRoutes } from "@constants/routes";
import { useCreatePostMutation } from "@redux/api/jsonPlaceholderApi";

export const CreatePost = () => {
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    reset,
    handleSubmit,
  } = useForm<PostType>();
  const navigate = useNavigate();
  const [addPost] = useCreatePostMutation();
  const onSubmit: SubmitHandler<PostType> = async (data) => {
    await addPost({ ...data, userId: 1, id: Date.now() });
    reset();
    setTimeout(() => {
      navigate(AppRoutes.POSTS);
    }, 3000);
  };

  return (
    <>
      <PageHead lastBreadcrumbsText="Create" />
      {!isSubmitSuccessful ? (
        <>
          <h1>Create Post</h1>
          <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              tag="input"
              label="Title"
              register={register("title", { required: true })}
              error={errors.title}
            />
            <InputField
              tag="textarea"
              label="Body"
              register={register("body", { required: true })}
              error={errors.body}
            />
            <button type="submit" className="form__item-value form__submit">
              Create
            </button>
          </form>
        </>
      ) : (
        <h3>
          Post successfully created. Now you will redirect to list of Posts.
        </h3>
      )}
    </>
  );
};
