import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { CommentsListWrap } from "@features/comments/components/CommentsListWrap/CommentsListWrap";

export const Comments = () => (
  <>
    <Breadcrumbs />
    <h1>Comments page</h1>
    <CommentsListWrap />
  </>
);
