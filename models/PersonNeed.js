'use strict';

module.exports = (sequelize, DataTypes) => {
  var PersonNeed = sequelize.define('PersonNeed', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    claimed: {
      type: DataTypes.BOOLEAN
    },
    fulfilled: {
      type: DataTypes.BOOLEAN
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    }
  });

  PersonNeed.associate = function(models) {
    models.PersonNeed.belongsTo(models.need);
    models.PersonNeed.belongsTo(models.person);
  }

  return PersonNeed;
};