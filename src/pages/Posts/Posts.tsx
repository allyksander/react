import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { CreateButton } from "@components/CreateButton/CreateButton";
import { PostsListWrap } from "@components/Posts/PostsListWrap/PostsListWrap";
import { AppRoutes } from "@constants/routes";

export const Posts = () => (
  <>
    <Breadcrumbs />
    <h1>Posts page</h1>
    <PostsListWrap />
    <CreateButton baseRoute={AppRoutes.POSTS} text="Create Post" />
  </>
);
