const Router = require("express").Router();
const photoController = require("../controllers/photoController");
const authentication = require("../middlewares/authentication");

Router.use(authentication)
Router.get("/", photoController.getAllPhotos);
Router.post("/", photoController.createPhoto);
Router.put("/:id", photoController.updatePhoto);
Router.delete("/:id", photoController.deletePhoto);

module.exports = Router;
