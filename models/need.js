'use strict';

module.exports = (sequelize, DataTypes) => {
  var Need = sequelize.define('need', {
    category: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  });

  Need.associate = function(models) {
    console.log(models);
    // models.need.belongsToMany(models.person, { as: 'needs', through: { model: 'PersonNeeds', unique: false}});
    models.need.hasMany(models.PersonNeed);
  };

  return Need;
};