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

  Family.createFamilyWithId = family => {
    return Family.create({
      lastName: family.lastName,
      SKC_ID: family.id
    }).catch(err => console.log(err));
  };

  return Family;
}