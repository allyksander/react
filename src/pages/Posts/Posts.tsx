import { PostsList } from "@components/Posts/PostsList/PostsList";

export const Posts = () => (
  <>
    <h1>Posts page</h1>
    <PostsList
      postsList={[
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ]}
    />
  </>
);
