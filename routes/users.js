var express = require('express');
var router = express.Router();
const User = require('../models').User

/* GET users listing. */
router.get('/', function (req, res) {
  User.findAll()
    .then(users => {
      res.json({ users })
    })
});
// Create a user
router.post('/', function (req, res) {
  User.create(req.body)
    .then(users => {
      res.json({ users })
    })
});
// Updating a user
router.put('/:id', (req, res) => {
  User.update(req.body, {
      where: { id: req.params.id }
  })
      .then(users => {
          res.json({ users })
      })
})



module.exports = router;
