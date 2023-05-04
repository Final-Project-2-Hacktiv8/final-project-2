const router = require("express").Router();
const userController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

router.get("/", userController.getAllUsers);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.use(authentication);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
