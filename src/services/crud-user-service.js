import bcrypt from "bcryptjs";
import db from "../models/index";

const { response } = require("express");
const salt = bcrypt.genSaltSync(10);

let createUser = async (data) => {
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
module.exports = {
  createUser: createUser,
};
