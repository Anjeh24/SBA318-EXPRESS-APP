const express = require("express");

const router = express.Router();


//path is; /users
router.get('/', (req, res) => {
   res.send("all users");
});

//path; /users/get-user-details
router.get('/get-user-details', (req, res) => {
    res.send('user details');
});

router.get('/all-users', (req, res) => {
    res.send('Anjeh, Marie, Erica, Phylis, Kadija, Marie, Jaleesa, Schmyia, Shahad, Mary, Carita, Dani, Joan');
});
router.post('/create-new-user', (req, res) => {
 res.send('user created');
})
router.put('/update-user-info', (req, res) => {   //using router as the middleware system to create independent routes in separate folders instead of index.js
    res.send('user info is updated');
});
router.delete('/delete-user', (req, res) => {
    res.send('user deleted');
});


module.exports = router;