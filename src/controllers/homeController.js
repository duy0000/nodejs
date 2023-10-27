import db from "../models/index";
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
module.exports = {
  gethome: getHome,
  getabout: getabout,
};
