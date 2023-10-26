let getHome = (req, res) => {
  return res.render("home.ejs");
};
let getabout = (req, res) => {
  return res.render("tet/about.ejs");
};
module.exports = {
  gethome: getHome,
  getabout: getabout,
};
