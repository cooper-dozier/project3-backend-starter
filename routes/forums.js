var express = require('express');
var router = express.Router();
const Forum = require('../models').Forum;
const Thread = require('../models').Thread;

router.get('/', (req, res) => {
    Forum.findAll()
        .then(forums => {
            console.log(res)
            res.json({ forums })
        })
})

router.get('/:id', (req, res) => {
    Forum.findByPk(req.params.id, {
        include: [{ model: Thread}]
    })
        .then(forums => {
            res.json({ forums })
        })
})

module.exports = router;