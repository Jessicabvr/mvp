'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('families', [
      {
        lastName: 'Khan',
        email: 'test1@test.com'  
      },
      {
        lastName: 'Mohammed',
        email: 'test2@test.com'        
      },
      {
        lastName: 'Khoury',
        email: 'test3@test.com' 
      },
      {
        lastName: 'Ali',
        email: 'test4@test.com' 
      },
      {
        lastName: 'Ahmad',
        email: 'test5@test.com' 
      },
      {
        lastName: 'Alaoui',
        email: 'test6@test.com' 
      },
      {
        lastName: 'Boulos',
        email: 'test7@test.com' 
      },
      {
        lastName: 'Harmon',
        email: 'test8@test.com' 
      },
      {
        lastName: 'Lockett',
        email: 'test9@test.com'        
      },
      {
        lastName: 'Geibel',
        email: 'test10@test.com' 
      },
      {
        lastName: 'Arroyo',
        email: 'test11@test.com' 
      },
      {
        lastName: 'Van Ness',
        email: 'test12@test.com' 
      },
      {
        lastName: 'Dancy',
        email: 'test13@test.com' 
      },
      {
        lastName: 'Cabeal',
        email: 'test14@test.com' 
      },
      {
        lastName: 'Peterson',
        email: 'test15@test.com' 
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
