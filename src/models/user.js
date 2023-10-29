"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //id (Khóa chính): Mã định danh mỗi người dùng.
  //user_image: Ảnh Đại Diện Người Dùng
  // username: Tên đăng nhập của người dùng.
  // email: Địa chỉ email của người dùng.
  // password: Mật khẩu của người dùng (được mã hóa).
  // user_type: Trường để xác định vai trò của người dùng (ví dụ, 1 cho người đọc, 2 cho tác giả).
  User.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      passWord: DataTypes.STRING,
      userImage: DataTypes.STRING,
      userType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
