const models = require('../models');
const Promise = require('bluebird');

module.exports.dbHelpers = {
  getFamilies: (callback) => {
    models.family.findAll({
      include: [ {model: models.person, as: 'members'} ]
    })
    .then(families => {
      callback(families);
    })
    .catch(err => console.log(err));
  },

  getFamily: (id, callback) => {
    models.family.findAll({
      include: [ {model: models.person, as: 'members'} ],
      where: {
        id: id
      }
    })
    .then(family => callback(family))
    .catch(err => console.log(err));
  },

  getFamilyMember: (familyId, personId, callback) => {
    models.person.findAll({
      include: [ {model: models.need, as: 'needs'} ],
      where: {
        id: personId
      }
    })
    .then(person => callback(person))
    .catch(err => console.log(err));
  },

  addFamily: (family, callback) => {
    models.family.create({
      lastName: family.lastName,
      SKC_ID: family.id
    })
    .then(family => callback(family))
    .catch(err => console.log(err));
  },

  addMembers: (id, members, callback) => {
    var promises = [models.family.findById(id)];
    members.map(member => promises.push(models.person.create(member)))
    Promise.all(promises)
    .then(members => console.log(members))   
  },

  addMember: (id, member, callback) => {
    Promise.all([
      models.person.create(member),
      models.family.findById(id)
    ]) 
    .spread((member, family) => {
      family.addMember(member);
    }).then(family => {
      callback(family);
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
      person.addNeed(savedNeed, {through: { claimed: false, fullfilled: false, description: need.description}, as: 'needs'});
    })
    .then((need) => callback(need))
    .catch(err => console.log(err));
  }
}

