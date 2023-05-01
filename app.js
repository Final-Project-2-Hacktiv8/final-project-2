const express = require('express');
const app = express();
const port = 3000;
const userRouters = require('./routers/userRouters');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouters);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});