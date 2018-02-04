'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('needs', [
      {
        category: 'physical item',
        type: 'household item',
      },
      {
        category: 'physical item',
        type: 'school item'
      },
      {
        category: 'physical item',
        type: 'clothing'
      },
      {
        category: 'transportation',
        type: 'with families directly'
      },
      {
        category: 'transportation',
        type: 'not with families directly'
      },
      {
        category: 'money',
        type: 'donation'
      },
      {
        category: 'community support',
        type: 'translation'
      },
      {
        category: 'community support',
        type: 'job support'
      },
      {
        category: 'community support',
        type: 'childcare'
      },
      {
        category: 'community support',
        type: 'prenatal support'
      },
      {
        category: 'community support',
        type: 'tutoring'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Person', null, {});
  }
};
