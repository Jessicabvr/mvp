const models = require('../models');
const Promise = require('bluebird');

module.exports.dbHelpers = {
  getFamilies: (callback) => {
    models.family.findAll({

      include: [
        {
          model: models.person,
          as: 'members',
          include: [{
            model: models.PersonNeed,
            as: 'needs'
          }]
        }
      ]
    })
    .then(families => {

      callback(families);
    })
    .catch(err => console.log(err));
  },

  getFamily: (id, callback) => {
    models.family.findAll({
      include: [{
        model: models.person, 
        as: 'members',
        include: [{
          model: models.PersonNeed,
          as: 'needs',
          include: [{
            model: models.need
          }]
        }]
      }],
      where: {
        id: id
      }
    })
    .then(family => callback(family))
    .catch(err => console.log(err));
  },

  getFamilyMember: (familyId, personId, callback) => {
    models.person.findAll({
      where: {
        id: personId
      },
      include: [{
        model: models.PersonNeed,
        as: 'needs'
      }]
    })
    .then(person => callback(person))
    .catch(err => console.log(err));
  },

  addFamily: (family, callback) => {
    return models.family.create({
      lastName: family.lastName,
      SKC_ID: family.id
    })
    .then(family => callback(family))
    .catch(err => console.log(err));
  },

  addMember: (id, member, callback) => {
    models.person.create({
      lastName: member.lastName,
      firstName: member.firstName,
      gender: member.gender,
      familyId: id
    })
     .then(member => {
      console.log(member);
      callback(member);
    })
    
    .catch(err => {
      console.log(err);
    });
  },

  associateNeed: (need, personId, callback) => {
    Promise.all([
      models.person.findById(personId),
      models.need.findAll({
        where: {
          category: need.category,
          type: need.type
        }
      })    
    ])
    .spread((person, savedNeed) => {
      return models.PersonNeed.create({
        claimed: false,
        fulfilled: false,
        description: need.description,
        needId: savedNeed[0].dataValues.id,
        personId: person.id,
        type: savedNeed[0].dataValues.type,
        category: savedNeed[0].dataValues.category
      })
    })
    .then((PersonNeed) => callback(PersonNeed))
    .catch(err => console.log(err));
  }
}

