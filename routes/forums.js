var express = require('express');
var router = express.Router();
const Forum = require('../models').Forum;

router.get('/', (req, res) => {
    Forum.findAll()
        .then(forums => {
            res.json({ forums })
        })
})



module.exports = router;