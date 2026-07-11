import routerAuth from "./modules/auth/services/auth.service.js";
import routerPost from "./modules/post/post.service.js";
import routerUser from "./modules/user/user.service.js";
import routerComment from "./modules/comment/comment.service.js";

export const bootstrap = (app, express) => {
  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));
  app.use("/auth", routerAuth);
  app.use("/user", routerUser);
  app.use("/post", routerPost);
  app.use("/comment",routerComment);
  app.get("/", (req, res) => res.status(200).json({ message: "hello world" }));

  //   app.all("/*splat", (req, res) =>
  //     res.status(404).json({ message: "not found" }),
  //   );
};
