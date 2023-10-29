"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("category", [
      {
        category: "Tình Cảm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Tiên Hiệp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Võng Du",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Đồng Nhân",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Đô Thị",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Kiếm Hiệp",
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
