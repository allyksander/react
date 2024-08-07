enum AppRoutesEnum {
  MAIN = "main",
  POSTS = "posts",
  COMMENTS = "comments",
  ALBUMS = "albums",
  PHOTOS = "photos",
  TODOS = "todos",
  USERS = "users",
  NOT_FOUND = "notFound",
  EDIT = "edit",
  CREATE = "create",
}

type IAppRoutesItem = {
  path: string;
  text: string;
};

type IAppRoutes = {
  [key in AppRoutesEnum]: IAppRoutesItem;
};

export const AppRoutes: IAppRoutes = {
  [AppRoutesEnum.MAIN]: {
    path: "/",
    text: "Main",
  },
  [AppRoutesEnum.POSTS]: {
    path: `/${AppRoutesEnum.POSTS}`,
    text: "Posts",
  },
  [AppRoutesEnum.COMMENTS]: {
    path: `/${AppRoutesEnum.COMMENTS}`,
    text: "Comments",
  },
  [AppRoutesEnum.ALBUMS]: {
    path: `/${AppRoutesEnum.ALBUMS}`,
    text: "Albums",
  },
  [AppRoutesEnum.PHOTOS]: {
    path: `/${AppRoutesEnum.PHOTOS}`,
    text: "Photos",
  },
  [AppRoutesEnum.TODOS]: {
    path: `/${AppRoutesEnum.TODOS}`,
    text: "Todos",
  },
  [AppRoutesEnum.USERS]: {
    path: `/${AppRoutesEnum.USERS}`,
    text: "Users",
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: "*",
    text: "Page not found",
  },
  [AppRoutesEnum.EDIT]: {
    path: `${AppRoutesEnum.EDIT}`,
    text: "Edit",
  },
  [AppRoutesEnum.CREATE]: {
    path: `${AppRoutesEnum.CREATE}`,
    text: "Create",
  },
};

export const AppMenu: IAppRoutesItem[] = [
  AppRoutes.main,
  AppRoutes.posts,
  AppRoutes.comments,
  AppRoutes.albums,
  AppRoutes.photos,
  AppRoutes.todos,
  AppRoutes.users,
];
