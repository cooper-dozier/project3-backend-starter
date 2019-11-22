var express = require('express');
var router = express.Router();
const Thread = require('../models').Thread;
const MessageItem = require('../models').MessageItem;

//Create a Thread
router.post('/', function (req, res) {
    Thread.create(req.body)
      .then(threads => {
        res.json({ threads })
      })
  });
//Get all threads
router.get('/', (req, res) => {
    Thread.findAll()
    .then(threads => {
        res.json({ threads })
    })
})
//Get one Thread 
// router.get('/:id', (req, res) => {
//     Thread.findByPk(req.params.id)
//         .then(threads => {
//             res.json({ threads })
//         })
// })

router.get('/:id', (req, res) => {
    Thread.findByPk(req.params.id, {
        include: [{ model: MessageItem}]
    })
        .then(threads => {
            res.json({ threads })
        })
})



//Get Update on Thread
router.put('/:id', (req, res) => {
    Thread.update(req.body, {
        where: { id: req.params.id }
    })
        .then(threads => {
            res.json({ threads })
        })
  })
//Delete a Thread
router.delete('/:id', (req, res) => {
    Thread.destroy({ where: { id: req.params.id } })
        .then((deletedThread) => {
            return Thread.findAll()
            // res.json({ pet: deletedPet })
        })
        .then(threads => {
            res.json({ threads })
        })
})

module.exports = router;