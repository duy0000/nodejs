"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        // userName: DataTypes.STRING,
        // email: DataTypes.STRING,
        // passWord: DataTypes.STRING,
        // userImage: DataTypes.STRING,
        // userType: DataTypes.STRING,
        userName: "admin",
        email: "admin@example.com",
        passWord: "duy123",
        userImage:
          "https://img.meta.com.vn/Data/image/2021/09/29/anh-binh-minh-1.jpg",
        userType: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "user",
        email: "user@example.com",
        passWord: "duy123",
        userImage:
          "https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg",
        userType: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "user2",
        email: "user2@example.com",
        passWord: "duy123",
        userImage:
          "https://vienthammydiva.vn/wp-content/uploads/2022/05/gai-xinh-han-quoc-2-1.jpg",
        userType: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
