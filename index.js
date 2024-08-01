const express = require("express");

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comments');
const view = require('./routes/view');


const app = express();

app.use('/users', users);
app.use('/posts', posts);
app.use('/comments', comments);
app.use('/view', view);

app.set('view engine', 'pug');


const port = 3000;





app.listen(port, () => {
    console.log(`server is listening on port: ${port}`); //check to see if server is listening
})