import bcrypt from "bcryptjs";
import db from "../models/index";

const { response } = require("express");
const salt = bcrypt.genSaltSync(10);

let createUser = async (data) => {
  //taoj mowis usser
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await hashpassword(data.password);
      await db.User.create({
        userName: data.userName,
        email: data.userEmail,
        passWord: hash,
        userType: data.userType,
      });
      resolve("taoj mowis thanhf coong");
    } catch (error) {
      reject(error);
    }
  });
};
let hashpassword = async (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
let getUser = () => {
  //lay du lieu user
  return new Promise((resolve, reject) => {
    try {
      let users = db.User.findAll({ raw: true });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
let getUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: userId }, raw: true });
      resolve(user);
      console.log(user);
      console.log("ddaay la user");
    } catch (error) {
      reject(error);
    }
  });
};
let updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: data.id } });
      if (user) {
        (user.userName = data.userName),
          (user.email = data.email),
          (user.passWord = data.passWord),
          (user.userType = data.userType),
          await user.save();
        let allUpdateUser = await db.User.findAll();

        resolve(allUpdateUser);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: id } });
      if (user) {
        await user.destroy();
        let allDeleteUser = await db.User.findAll();
        resolve(allDeleteUser);
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createUser: createUser,
  getUser: getUser,
  getUserById: getUserById,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
