require("dotenv").config()
// const config = require('./config/config.js')[env]
const express = require('express');
const app = express();
const port = process.env.PORT;
const userRouter = require('./routers/userRouters');
const photoRouter = require('./routers/photoRouters');
const commentRouter = require('./routers/commentRouters');
const socialmediaRouters = require('./routers/socialmediaRouters');
const env = process.env.NODE_ENV


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/photos', photoRouter);
app.use('/comment', commentRouter);
app.use('/socialmedia', socialmediaRouters)

app.get('/', (req, res) => {
    res.send('selamat datang')
})


//koneksikan ke database yang ada di config
// const { sequelize } = require('./models');
// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('Database connected');
//     })
//     .catch((err) => {
//         console.log(err);
//     })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

    

    

module.exports = app;