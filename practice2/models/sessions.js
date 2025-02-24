"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sessions.belongsTo(models.users, { foreignKey: "user_id" });
    }
  }
  sessions.init(
    {
      user_id: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid:true,
      modelName: "sessions",
    }
  );
  return sessions;
};
