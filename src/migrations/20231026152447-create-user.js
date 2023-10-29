"use strict";
/** @type {import('sequelize-cli').Migration} */
//id (Khóa chính): Mã định danh mỗi người dùng.
//user_image: Ảnh Đại Diện Người Dùng
// username: Tên đăng nhập của người dùng.
// email: Địa chỉ email của người dùng.
// password: Mật khẩu của người dùng (được mã hóa).
// user_type: Trường để xác định vai trò của người dùng (ví dụ, 1 cho người đọc, 2 cho tác giả).
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      passWord: {
        type: Sequelize.STRING,
      },
      userImage: {
        type: Sequelize.STRING,
      },
      userType: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
