'use strict';

module.exports = (sequelize, DataTypes) => {
  var PersonNeed = sequelize.define('PersonNeed', {
    claimed: {
      type: DataTypes.BOOLEAN
    },
    fulfilled: {
      type: DataTypes.BOOLEAN
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  return PersonNeed;
};