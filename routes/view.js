const express = require("express");

const router = express.Router();


//route is; view/About-Template-Views
router.get('/About-Template-Views', (req, res) => {  //setting route for view engine. It works!
    res.render('index.pug', {
        title: 'About Views'
    })
})

module.exports = router;