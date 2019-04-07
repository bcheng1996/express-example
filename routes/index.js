var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Farmer.findAll({
    include: [ models.Farm ]
  }).then(function(farmers) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      farmers: farmers
    });
  });
});

module.exports = router;
