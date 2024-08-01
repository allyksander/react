import { useNavigate, useParams } from "react-router-dom";
import {
  useEditPostMutation,
  useGetPostsQuery,
} from "@redux/api/jsonPlaceholderApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostType } from "../PostsCard/types";
import { AppRoutes } from "@constants/routes";
import { PostFormTemplate } from "../PostFormTemplate/PostFormTemplate";
import { LoadingPlaceholder } from "@components/LoadingPlaceholder/LoadingPlaceholder";

export const EditPost = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetPostsQuery(id);
  const { reset } = useForm<PostType>();
  const navigate = useNavigate();
  const [editPost] = useEditPostMutation();
  const onSubmit: SubmitHandler<PostType> = async (data) => {
    editPost({ ...data, id: +id });
    reset();
    setTimeout(() => {
      navigate(AppRoutes.POSTS);
    }, 3000);
  };
  <LoadingPlaceholder isLoading={isLoading} isError={isError} data={data} />;

  if (data && !Array.isArray(data)) {
    return (
      <PostFormTemplate
        pageTitle="Edit post"
        formData={data}
        formSubmitHandler={onSubmit}
        formSubmitButtonText="Edit"
        submitedFormPlacehoderText="Post successfully edited. Now you will redirect to list of Posts."
      />
    );
  }
};
