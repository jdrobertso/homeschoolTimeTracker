var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.SubjectType.findAll({
    include: [models.Subject]
  }).then(function(subjectTypes) {
    res.render('index', {
      title: 'Sundance Academy',
      subjectTypes: subjectTypes,
    })
  })
});

module.exports = router;
