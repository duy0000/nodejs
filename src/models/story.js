"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // story_id (Khóa chính): Mã định danh mỗi truyện.
  // title: Tiêu đề của truyện.
  // author_id (Khóa ngoại): Liên kết đến người dùng (Bảng Người Dùng) làm tác giả của truyện.
  // description: Mô tả ngắn gọn về truyện.
  // cover_image: Đường dẫn đến hình ảnh bìa truyện.
  // type: Thể loại của truyện (ví dụ: hài hước, kỳ ảo, kinh dị, tình cảm, ...).
  story.init(
    {
      chapter: DataTypes.INTEGER,
      authorId: DataTypes.STRING,
      description: DataTypes.TEXT,
      storyImage: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
