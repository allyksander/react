import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { PostType } from "../PostsCard/types";
import { AppRoutes } from "@constants/routes";
import { useCreatePostMutation } from "@redux/api/jsonPlaceholderApi";
import { PostFormTemplate } from "../PostFormTemplate/PostFormTemplate";

export const CreatePost = () => {
  const { reset } = useForm<PostType>();
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
    <PostFormTemplate
      pageTitle="Create post"
      formSubmitHandler={onSubmit}
      formSubmitButtonText="Create"
      submitedFormPlacehoderText="Post successfully createed. Now you will redirect to list of Posts."
    />
  );
};
