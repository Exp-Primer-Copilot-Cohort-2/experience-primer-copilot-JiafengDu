// create web server with express
const express = require('express');
const app = express();
const port = 3000;

// load comments module
const comments = require('./comments');

// get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// get comment by id
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(comments.getCommentById(id));
});

// add comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.addComment(comment);
    res.json(comment);
});

// update comment
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = req.body;
    comments.updateComment(id, comment);
    res.json(comment);
});

// delete comment
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments.deleteComment(id);
    res.json({ message: 'Comment has been deleted' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
