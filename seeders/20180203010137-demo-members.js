'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('people', [
      {
        firstName: 'Neal',
        lastName: 'Lockett',
        gender: 'nonbinary',
        familyId: 9
      },
      {
        firstName: 'Michelle',
        lastName: 'Lockett',
        gender: 'female',
        familyId: 9
      },
      {
        firstName: 'Havilah',
        lastName: 'Lockett',
        gender: 'female',
        familyId: 9
      },
      {
        firstName: 'Muir',
        lastName: 'Lockett',
        gender: 'male',
        familyId: 9
      },
      {
        firstName: 'Ashley',
        lastName: 'Arroyo',
        gender: 'female',
        familyId: 11
      },
      {
        firstName: 'David',
        lastName: 'Arroyo',
        gender: 'male',
        familyId: 11
      },
      {
        firstName: 'Randy',
        lastName: 'Harmon',
        gender: 'male',
        familyId: 8
      },
      {
        firstName: 'Marsha',
        lastName: 'Harmon',
        gender: 'female',
        familyId: 8
      },
      {
        firstName: 'Finnegan',
        lastName: 'Harmon',
        gender: 'male',
        familyId: 8
      },
      {
        firstName: 'Zahara',
        lastName: 'Harmon',
        gender: 'female',
        familyId: 8
      }], {});  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
