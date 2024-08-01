const express = require("express");

const router = express.Router();


//path is; /posts
router.get('/', (req, res) => {
   res.send("all posts");
});

//path; /users/get-user-details
router.get('/get-user-posts', (req, res) => {
    res.send('users posts');
});

router.post('/create-new-post', (req, res) => {
    res.send('post created');
   })
   router.put('/update-post', (req, res) => {   //using router as the middleware system to create independent routes in separate folders instead of index.js
       res.send('publish new post');
   });
   router.delete('/delete-post', (req, res) => {
       res.send('delete post');
   });

module.exports = router;