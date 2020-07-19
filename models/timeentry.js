'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.TimeEntry.belongsTo(models.Subject);
    }
  };
  TimeEntry.init({
    timeSpent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TimeEntry',
  });
  return TimeEntry;
};