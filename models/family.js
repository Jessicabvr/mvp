'use strict';

module.exports = (sequelize, DataTypes) => {
  var Family = sequelize.define('family', {
    lastName: DataTypes.STRING,
    SKC_ID: {
      type: DataTypes.INTEGER,
      unique: true
    }
  });

  Family.associate = function(models) {
    models.family.hasMany(models.person, {as: {singular: 'member', plural: 'members'}});
  };

  return Family;
}