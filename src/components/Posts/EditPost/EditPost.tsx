import { useNavigate, useParams } from "react-router-dom";
import {
  useEditPostMutation,
  useGetPostsQuery,
} from "@redux/api/jsonPlaceholderApi";
import { EditPage } from "@components/EditPage/EditPage";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostType } from "../PostsCard/types";
import { AppRoutes } from "@constants/routes";
import { InputField } from "@components/InputField/InputField";

export const EditPost = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetPostsQuery(id);
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    reset,
    handleSubmit,
  } = useForm<PostType>();
  const navigate = useNavigate();
  const [editPost] = useEditPostMutation();
  const onSubmit: SubmitHandler<PostType> = async (data) => {
    editPost({ ...data, id: +id });
    reset();
    setTimeout(() => {
      navigate(AppRoutes.POSTS);
    }, 3000);
  };

  if (isLoading && !data) {
    return <h1>isLoading</h1>;
  }

  if (isError && !data) {
    return <h1>isError</h1>;
  }

  if (data && !Array.isArray(data)) {
    return (
      <EditPage>
        <h1>Edit post</h1>
        {!isSubmitSuccessful ? (
          <>
            <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                tag="input"
                label="Title"
                register={register("title", {
                  value: data.title,
                  required: true,
                })}
                error={errors.title}
              />
              <InputField
                tag="textarea"
                label="Body"
                register={register("body", {
                  value: data.body,
                  required: true,
                })}
                error={errors.body}
              />
              <button type="submit" className="form__item-value form__submit">
                Edit
              </button>
            </form>
          </>
        ) : (
          <h3>
            Post successfully edited. Now you will redirect to list of Posts.
          </h3>
        )}
      </EditPage>
    );
  }
};
