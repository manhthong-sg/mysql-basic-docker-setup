"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      store_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      sku_code: {
        type: Sequelize.STRING,
        unique: true,
      },
      description: {
        type: Sequelize.TEXT,
        comment: "Mô tả sản phẩm",
      },
      ingredients: {
        type: Sequelize.TEXT,
        comment: "Thành phần",
      },
      uses: {
        type: Sequelize.TEXT,
        comment: "Công dụng",
      },
      instruction: {
        type: Sequelize.TEXT,
        comment: "Cách dùng",
      },
      side_effects: {
        type: Sequelize.TEXT,
        comment: "Tác dụng phụ",
      },
      preserve: {
        type: Sequelize.TEXT,
        comment: "Bảo quản",
      },
      is_prescriptive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: Sequelize.SMALLINT,
        defaultValue: 1,
      },
      ranking_point: {
        type: Sequelize.INTEGER,
        defaultValue: 10000,
        comment: "Điểm xếp hạng sản phẩm",
      },
      seo_description: {
        type: Sequelize.STRING,
      },
      seo_keywords: {
        type: Sequelize.STRING,
      },
      seo_slug: {
        type: Sequelize.STRING,
      },
      seo_title: {
        type: Sequelize.STRING,
      },
      created_by: {
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      },
      deleted_by: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("product_lists");
  },
};
