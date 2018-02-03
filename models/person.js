'use strict';

module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('person', {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
  });

  Person.associate = function(models) {
    models.person.belongsToMany(models.need, {through: 'PersonNeeds'});
  };

  return Person;
};