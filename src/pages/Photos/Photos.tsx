import { PhotosList } from "@components/Photos/PhotosList/PhotosList";

export const Photos = () => (
  <>
    <h1>Photos page</h1>
    <PhotosList
      photosList={[
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
      ]}
    />
  </>
);
