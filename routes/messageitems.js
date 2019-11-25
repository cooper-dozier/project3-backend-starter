var express = require('express');
var router = express.Router();
const MessageItem = require('../models').MessageItem
const Thread = require('../models').Thread

//Get all post
router.get('/', (req, res) => {
    MessageItem.findAll()
        .then(messageItems => {
            res.json({ messageItems })
        })
});
//Get all post
// router.get('/thread/:id', (req, res) => {
//     MessageItem.findAll({ where: {id: req.params.id} },
//         {returning: true})
//         .then(messageItems => {
//             res.json({ messageItems })
//         })
// });

//Get one post
router.get('/:id', (req, res) => {
    MessageItem.findByPk(req.params.id)
        .then(messageItems => {
            res.json({ messageItems })
        })
})

// Create a post 
// return the new messageItem
router.post('/', (req, res) => {
    MessageItem.create({ message: req.body.message, userId: req.body.userId, threadId: req.body.threadId })
        // .then(() => {
        //     return MessageItem.findAll()
        // })
        .then(messageItems => {
            res.json({ messageItems })
        })
        .catch(error => {
            res.json({ message: error })
        })
})

//Update a Post
router.put('/:id', (req, res) => {
    MessageItem.update(req.body, {
        where: { id: req.params.id }
    })
        .then(messageItems => {
            res.json({ messageItems })
        })
})

//delete a Post
router.delete('/:id', (req, res) => {
    MessageItem.destroy({ where: { id: req.params.id } })
        .then((deletedMessageItem) => {
            return MessageItem.findAll()
            // res.json({ pet: deletedPet })
        })
        .then(messageItems => {
            res.json({ messageItems })
        })
})




module.exports = router;