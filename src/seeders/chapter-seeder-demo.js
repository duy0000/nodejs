"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("chapter", [
      {
        chapterOrder: 1,
        chapterName: "test1",
        content:
          "Han Kyung chính là một trong những gái xinh Hàn Quốc nổi tiếng nhất hiện nay, cô nàng không chỉ sở hữu gương mặt baby, nhỏ nhắn, cuốn hút mà còn được nhiều người yêu thích bởi thân hình nóng bỏng, gợi cảm và quyến rũ. Hot girl sinh năm 1998 hiện đang được rất nhiều người theo dõi trên Instagram trong đó có cả Việt Nam, Trung Quốc và Nhật Bản.  ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chapterOrder: 2,
        chapterName: "test2",
        content: "tet2 ",
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
