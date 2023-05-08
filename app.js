const express = require("express");
const app = express();
const port = 3000;
const userRouters = require("./routers/userRouters");
const photoRouters = require("./routers/photoRouters");
const socialMediaRouters = require("./routers/socialMediaRouters");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouters);
app.use("/photos", photoRouters);
app.use("/socialmedias", socialMediaRouters);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
