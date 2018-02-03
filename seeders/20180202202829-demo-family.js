'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('families', [
      {
        lastName: 'Khan',
        SKC_ID: 101  
      },
      {
        lastName: 'Mohammed',
        SKC_ID: 102       
      },
      {
        lastName: 'Khoury',
        SKC_ID: 103
      },
      {
        lastName: 'Ali',
        SKC_ID: 104
      },
      {
        lastName: 'Ahmad',
        SKC_ID: 105
      },
      {
        lastName: 'Alaoui',
        SKC_ID: 106
      },
      {
        lastName: 'Boulos',
        SKC_ID: 107
      },
      {
        lastName: 'Harmon',
        SKC_ID: 108
      },
      {
        lastName: 'Lockett',
        SKC_ID: 109       
      },
      {
        lastName: 'Geibel',
        SKC_ID: 110
      },
      {
        lastName: 'Arroyo',
        SKC_ID: 111
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.bulkDelete('families', null, {});
  }
};

     // members: [
     //      {
     //        firstName: 'Amir',
     //        lastName: 'Khan',
     //        gender: 'male'
     //      },
     //      {
     //        firstName: 'Dalal',
     //        lastName: 'Khan',
     //        gender: 'female'
     //      },
     //      {
     //        firstName: 'Dana',
     //        lastName: 'Khan',
     //        gender: 'female'
     //      }
     //    ]

     //    members: [
     //      {
     //        firstName: 'Badr',
     //        lastName: 'Mohammed',
     //        gender: 'male'
     //      },
     //      {
     //        firstName: 'Dima',
     //        lastName: 'Mohammed',
     //        gender: 'female'
     //      },
     //      {
     //        firstName: 'Fadi',
     //        lastName: 'Mohammed',
     //        gender: 'male'
     //      },
     //      {
     //        firstName: 'Farid',
     //        lastName: 'Mohammed',
     //        gender: 'male'
     //      }
     //    ]

     //    members: [
     //      {
     //        firstName: 'Michelle',
     //        lastName: 'Lockett',
     //        gender: 'female'
     //      },
     //      {
     //        firstName: 'Neal',
     //        lastName: 'Lockett',
     //        gender: 'nonbinary'
     //      },
     //      {
     //        firstName: 'Havilah',
     //        lastName: 'Lockett',
     //        gender: 'female'
     //      },
     //      {
     //        firstName: 'Muir',
     //        lastName: 'Lockett',
     //        gender: 'male'
     //      }
     //    ]
