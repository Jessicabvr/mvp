const Config = require('../config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mvpSKC', 'root', Config.Config.dbConnectionPassword, {
  host: 'localhost',
  dialect: 'mysql',
});


const Promise = require('bluebird');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Admin = sequelize.define('admin', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

const Family = sequelize.define('family', {
  lastName: {
    type: Sequelize.STRING
  },
  SKC_ID: {
    type: Sequelize.INTEGER,
    unique: true
  },
});

const Person = sequelize.define('person', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
});

const Need = sequelize.define('need', {
  category: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  }
});

const PersonNeed = sequelize.define('PersonNeed', {
  claimed: {
    type: Sequelize.BOOLEAN
  },
  fulfilled: {
    type: Sequelize.BOOLEAN
  }
});

Family.hasMany(Person, {as: 'members'});
Need.belongsToMany(Person, { as: 'needs', through: 'PersonNeed'});
Person.belongsToMany(Need, {through: 'PersonNeed'});

Family.createFamilyWithId = (family => {
  return Family.create({
    lastName: family.lastName,
    SKC_ID: family.id
  }).catch(err => console.log(err));

});

Family.createFamilyWithMembers = ((family, members) => {
  return Family.create({
    lastName: family.lastName,
    SKC_ID: family.id,
    members: members
  }, {
    include: [{
      model: person,
      as: 'members'
    }]
  })
});


// force: true will drop the table if it already exists

var seed = function() {
  return sequelize.sync({force:true})
    .then(() =>
      Promise.all([
        Need.create({category: "pregnancy", type: "doula"}),
        //Need.create({category: "language", type: "translation"});
        Admin.create({ firstName: "Michelle", lastName: "Lockett", password: "password" }),
        Family.create(
          { lastName: "Lockett",
            members: [
              { firstName: "Michelle", lastName: "Lockett", gender: "female"},
              { firstName: "Neal", lastName: "Lockett", gender: "nonbinary"}
            ],
            SKC_ID: 456
          }, {
            include: [{
              model: Person,
              as: 'members'
            }]
          }),       
      ])
    )
    .then((families) => {
      console.log(families[2]);
    })
    .catch(err => console.log(err));
};

seed();



