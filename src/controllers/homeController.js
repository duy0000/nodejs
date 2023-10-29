import db from "../models/index";
import crudUserService, { createUser } from "../services/crud-user-service";

let getHome = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("home.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
let getabout = (req, res) => {
  return res.render("tet/about.ejs");
};
let postUser = async (req, res) => {
  let message = await crudUserService.createUser(req.body);
  console.log(message);
  return res.send("tet");
};
module.exports = {
  gethome: getHome,
  getabout: getabout,
  postUser: postUser,
};
