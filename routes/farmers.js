var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.Farmer.create({
    lastname: req.body.lastname
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:farmer_id/destroy', function(req, res) {
  models.Farmer.destroy({
    where: {
      id: req.params.farmer_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:farmer_id/tasks/create', function (req, res) {
  console.log(req.params.farmer_id)
  models.Farm.create({
    farmcode: req.body.farmcode,
    FarmerId: req.params.farmer_id
  }).then(function() {
    res.redirect('/');
  }).catch(models.Sequelize.ValidationError, function (err) {
    res.send("validation error")
  });
});

router.get('/:farmer_id/tasks/:task_id/destroy', function (req, res) {
  models.Farm.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
