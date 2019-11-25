var express = require('express');
var router = express.Router();
const Thread = require('../models').Thread;
const MessageItem = require('../models').MessageItem;
const Forum = require('../models').Forum;
const User = require('../models').User;

// show all threads in one forum 
// url: http://localhost:3000/api/threads/Anime where Anime
router.get('/:forum_name', (req, res) => {
    Forum.findOne({ where: { forum_name: req.params.forum_name } })
        .then(result => {
            Thread.findAll({
                where: { forumId: result.id }
            })
                .then(threads => {
                    res.json({ threads })
                })
        })
})

// GET a thread with all its messageItems
router.get('/messages/:id', (req, res) => {
    Thread.findByPk(req.params.id, {
        include: [{ model: MessageItem }]
    })
        .then(threads => {
            res.json({ threads })
        })
})

//TEMP
//Create a post 
router.post('/', (req, res) => {
    MessageItem.create({ message: req.body.message, userId: req.body.userId, threadId: req.body.threadId })

        .then(messageItems => {
            res.json({ messageItems })
        })
        .catch(error => {
            res.json({ message: error })
        })
})

// Create a Thread
// send from frontend:
// {"subject":"subject up to 255 chars","username":"string up to 255"}
// needs to do a GET on username from form to get User id for username to set userIdon Thread
// logic to display the new thread does not go here
router.post('/', (req, res) => {
    Thread.create({ subject: req.body.subject, userId: req.body.userId, forumId: req.body.forumId })
        .then(newThread => {
            res.json({ newThread })
        })
        .catch(error => {
            res.json({ message: error })
        })
});


module.exports = router;

// show all messages in one thread
// since the plan is for the threads to use accordion folds to show
// instead of a new page, it should not be necessary to return the thread subject and user
// since that will be already shown because you clicked on it
// router.get('/threads/:id', (req, res) => {
//     Thread.findOne({ where: { id: req.params.id } })

//         .then(result => {
//             MessageItem.findAll({
//                 where: { threadId: result.id }
//             })

//                 .then(threads => {
//                     res.json({ threads })
//                 })
//         })
// })

// get 