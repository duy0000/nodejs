import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeController.gethome); //lấy dữ liệu thì dùng get
  router.get("/about", homeController.getabout);
  router.post("/post-user", homeController.postUser); //đẩy dữ liệu thì dugf post
  router.get("/get-user", homeController.getUser);

  return app.use("/", router);
};
module.exports = initWebRoutes;
