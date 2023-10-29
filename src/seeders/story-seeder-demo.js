"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("story", [
      {
        chapter: 12,
        authorId: 2,
        description: "gfusagudgsiuhduisah",
        storyImage:
          "https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg",
        type: "Tình Cảm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chapter: 3,
        authorId: 2,
        description: "ehfugebwufbhwufh",
        storyImage:
          "https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg",
        type: "Tiên Hiệp",
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
