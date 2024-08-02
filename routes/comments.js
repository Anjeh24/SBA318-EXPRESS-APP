const express = require("express");

const router = express.Router();


//path is; /comments
router.get('/', (req, res) => {
   res.send("all comments");
});

//path; /comments/get-user-details
router.get('/get-user-comments', (req, res) => {
    res.send('users comments');
});

router.get('/get-user-comment/:commentDate', (req, res) => { //route with parameter for date
    const commentDate = new Date;
    res.send(`Comment posted on: ${commentDate}`)
});

router.post('/create-new-comment', (req, res) => {
    res.send('comment created');
   })
   router.put('/update-comment', (req, res) => {   //using router as the middleware system to create independent routes in separate folders instead of index.js
       res.send('comment updated');
   });
   router.delete('/delete-comment', (req, res) => {
       res.send('comment deleted');
   });

module.exports = router;