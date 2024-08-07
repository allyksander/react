import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { PhotosListWrap } from "@features/photos/components/PhotosListWrap/PhotosListWrap";

export const Photos = () => (
  <>
    <Breadcrumbs />
    <h1>Photos page</h1>
    <PhotosListWrap />
  </>
);
