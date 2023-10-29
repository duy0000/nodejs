"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // story_id (Khóa ngoại): Liên kết đến truyện mà chương thuộc về.
  // chapterName: Tên chương.
  // content: Nội dung của chương (có thể lưu trữ dưới dạng văn bản hoặc HTML).
  // order: Số thứ tự của chương trong truyện.
  category.init(
    {
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};
