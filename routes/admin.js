var models  = require('../models');
var express = require('express');
var path = require('path');
var Promise = require('bluebird');
var db = require('../helpers/dbHelpers.js');
var router  = express.Router();

router.get('/current/:id', (req, res) => {
  res.redirect('/')
})

//return all families currently in the database
router.get('/families', (req, res) => {
  db.dbHelpers.getFamilies(families => res.send(families))
});

//return all info for an individual family
router.get('/families/:id', (req, res) => {
  db.dbHelpers.getFamily(req.params.id, (family => res.send(family)));
});

//return all info for an invidual family member
router.get('/families/:familyId/members/:memberId', (req, res) => {
  db.dbHelpers.getFamilyMember(req.params.familyId, req.params.memberId, (person => res.send(person)));
});

router.get('/needs/all', (req, res) => {
  db.dbHelpers.getSortAllNeeds((needs) => res.send(needs));
});

//add a new family to the database
router.post('/families', (req, res) => {
  db.dbHelpers.addFamily(req.body.family, (family => {
    console.log(family);
    res.send(family);
  })); 
});

//add a family member to a family already in the databae
router.post('/families/:id', (req, res) => {
  db.dbHelpers.addMember(req.params.id, req.body.member, (member=> res.send(member)));
});

//associate a new need to a member
router.post('/families/:familyId/members/:memberId/needs', (req, res) => {
  db.dbHelpers.associateNeed(req.body.need, req.params.memberId, req.params.familyId, ((need) => res.send(need)));
});

//prevent the front end from sending requests on refresh
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = router;