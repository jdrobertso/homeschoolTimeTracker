var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET a new time entry */
router.get('/new/:id', function(req, res, next) {
  models.Subject.findOne({
    where: { id: req.params.id }
  }).then(function(subject) {
    res.render('newtime', {
      title: subject.name,
      subject: subject,
    })
  })
});

/* POST a new time entry */
router.post('/new/', function(req, res, next) {
  var time = parseInt(req.body.time)
  models.TimeEntry.create({
    timeSpent: time,
    SubjectId: req.body.subjectId,
  })
  .catch((error) => {
    res.render('error', error);
  })
  .then(function() {
    models.Subject.findOne({
      where: { id: req.body.subjectId },
      include: [models.SubjectType]
    })
    .then((subject) => {
      subject.dailyTotal += time
      subject.weeklyTotal += time
      subject.annualTotal += time
      subject.save()
      subject.SubjectType.annualTotal += time
      subject.SubjectType.weeklyTotal += time
      subject.SubjectType.dailyTotal += time
      subject.SubjectType.save()
      res.redirect(`/subject/${subject.id}`);
    })
  })
});

router.get('/delete/:id', function(req, res, next) {
  models.TimeEntry.findOne({
    where: { id: req.params.id },
    include: {
      model: models.Subject,
      include: [models.SubjectType]
    }
  })
  .catch((error) => {
    res.render('error', error);
  })
  .then((timeEntry) => {
    var subject = timeEntry.Subject;
    var subjectType = subject.SubjectType;
    subject.dailyTotal -= timeEntry.timeSpent
    subject.weeklyTotal -= timeEntry.timeSpent
    subject.annualTotal -= timeEntry.timeSpent
    subject.save()
    subjectType.dailyTotal -= timeEntry.timeSpent
    subjectType.weeklyTotal -= timeEntry.timeSpent
    subjectType.annualTotal -= timeEntry.timeSpent
    subjectType.save()
    timeEntry.destroy()
    res.redirect(`/subject/${subject.id}`);
  })
  .catch((error) => {
    res.render('error', error);
  })
});

module.exports = router;
