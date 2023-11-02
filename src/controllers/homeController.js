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
let editUser = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let user = await crudUserService.getUserById(userId);
    return res.render("editUser", { userData: user });
    console.log(userData);
  } else {
    return res.send("Khong Timf Thaays id");
  }
};
let putUser = async (req, res) => {
  let data = req.body;
  let allUpdateUser = await crudUserService.updateUser(data);
  return res.render("allUser.ejs", {
    datatable: allUpdateUser,
  });
};
let deleteUser = async (req, res) => {
  let id = req.query.id;
  let allUser = await crudUserService.deleteUser(id);
  return res.render("allUser.ejs", {
    datatable: allUser,
  });
};
module.exports = {
  gethome: getHome,
  getabout: getabout,
  postUser: postUser,
  getUser: getUser,
  editUser: editUser,
  putUser: putUser,
  deleteUser: deleteUser,
};
