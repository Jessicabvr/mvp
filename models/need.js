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
    models.need.belongsToMany(models.person, { as: 'needs', through: 'PersonNeed'});
  };

  return Need;
};