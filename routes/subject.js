var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET a subject. */
router.get('/:id', function(req, res, next) {
  models.Subject.findOne({
    where: { id: req.params.id },
    include: [models.TimeEntry]
  }).then(function(subject) {
    res.render('subject', {
      title: subject.name,
      subject: subject,
    })
  })
});

module.exports = router;