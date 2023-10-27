const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("development", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let conectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("successfully.");
  } catch (error) {
    console.error("Unable to connect:", error);
  }
};
module.exports = conectDB;
