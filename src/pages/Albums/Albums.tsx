import { AlbumsList } from "@components/Albums/AlbumsList/AlbumsList";

export const Albums = () => (
  <>
    <h1>Comments page</h1>
    <AlbumsList
      albumsList={[
        {
          userId: 1,
          id: 1,
          title: "quidem molestiae enim",
        },
      ]}
    />
  </>
);
