const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routers/userRouters');
const photoRouter = require('./routers/photoRouters');
const commentRouter = require('./routers/commentRouters');
const socialmediaRouters = require('./routers/socialmediaRouters');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/photos', photoRouter);
app.use('/comment', commentRouter);
app.use('/socialmedia', socialmediaRouters)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));