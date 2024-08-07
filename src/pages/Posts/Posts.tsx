import { AppRoutes } from "@constants/routes";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { PostsListWrap } from "@features/posts/components/PostsListWrap/PostsListWrap";
import { CreateButton } from "@components/CreateButton/CreateButton";

export const Posts = () => (
  <>
    <Breadcrumbs />
    <h1>Posts page</h1>
    <PostsListWrap />
    <CreateButton baseRoute={AppRoutes.POSTS} text="Create Post" />
  </>
);
