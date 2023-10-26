import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeController.gethome);
  router.get("/about", homeController.getabout);
  return app.use("/", router);
};
module.exports = initWebRoutes;
