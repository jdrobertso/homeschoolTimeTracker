'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubjectType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.SubjectType.hasMany(models.Subject)
    }
  };
  SubjectType.init({
    name: DataTypes.STRING,
    annualGoal: DataTypes.INTEGER,
    weeklyGoal: DataTypes.INTEGER,
    dailyGoal: DataTypes.INTEGER,
    annualTotal: DataTypes.INTEGER,
    weeklyTotal: DataTypes.INTEGER,
    dailyTotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubjectType',
  });
  return SubjectType;
};