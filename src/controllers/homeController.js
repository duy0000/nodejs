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
  return res.send("tạo user thành công");
};
let getUser = async (req, res) => {
  let data = await crudUserService.getUser();
  console.log("lấy dữ liệu thành công");
  return res.render("allUser.ejs", {
    datatable: data,
  });
};
module.exports = {
  gethome: getHome,
  getabout: getabout,
  postUser: postUser,
  getUser: getUser,
};
