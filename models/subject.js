'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Subject.hasMany(models.TimeEntry);
      models.Subject.belongsTo(models.SubjectType);
    }
  };
  Subject.init({
    name: DataTypes.STRING,
    dailyTotal: DataTypes.INTEGER,
    weeklyTotal: DataTypes.INTEGER,
    annualTotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};