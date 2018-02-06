'use strict';

module.exports = (sequelize, DataTypes) => {
  var Family = sequelize.define('family', {
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }   
  });

  Family.associate = function(models) {
    models.family.hasMany(models.person, {as: {singular: 'member', plural: 'members'}});
  };

  return Family;
}