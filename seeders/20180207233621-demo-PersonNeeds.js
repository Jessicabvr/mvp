'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PersonNeeds', [
    {
      claimed: true,
      fulfilled: false,   
      description: 'kitchen table',
      type: 'household item',
      category: 'physical item',
      lastName: 'Lockett',
      needId: 1,
      personId: 2
    },

    {
      claimed: true,
      fulfilled: true,   
      description: 'English practice',
      type: 'tutoring',
      category: 'community support',
      lastName: 'Lockett',
      needId: 11,
      personId: 2
    },

    {
      claimed: false,
      fulfilled: false,   
      description: 'for a used car',
      type: 'donation',
      category: 'money',
      lastName: 'Lockett',
      needId: 6,
      personId: 2
    },
     {
      claimed: true,
      fulfilled: true,   
      description: '4th grade backpack',
      type: 'school item',
      category: 'physical item',
      lastName: 'Lockett',
      needId: 2,
      personId: 3
    },
    {
      claimed: true,
      fulfilled: true,   
      description: 'ride to apt 2/1/18 12pm',
      type: 'with families directly',
      category: 'transportation',
      lastName: 'Lockett',
      needId: 4,
      personId: 1
    },
    {
      claimed: true,
      fulfilled: true,   
      description: '2nd grade backpack',
      type: 'school item',
      category: 'physical item',
      lastName: 'Lockett',
      needId: 2,
      personId: 4
    }])
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
