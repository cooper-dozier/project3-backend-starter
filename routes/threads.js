var express = require('express');
var router = express.Router();
const Thread = require('../models').Thread;
const MessageItem = require('../models').MessageItem;
const Forum = require('../models').Forum;
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
// /api/threads/anime

router.get('/:forum_name', (req, res) => {
    Forum.findOne({ where: { forum_name: req.params.forum_name } })
    .then(result => {
        Thread.findAll({
            where: {forumId: result.id} 
            //  where: forum_name = "Anime",
            // attributes: ['username','subject','updatedAt']
        })
            .then(threads => {
                res.json({ threads })
            })
    })

})

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