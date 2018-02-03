'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('needs', [
      {
        category: 'physical item',
        type: 'household item'
      },
      {
        category: 'personal service',
        type: 'with families directly'
      },
      {
        category: 'personal service',
        type: 'not with families directly'
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
        type: 'money'
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
