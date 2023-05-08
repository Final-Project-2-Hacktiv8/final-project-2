const router = require("express").Router();
const commentController = require("../controllers/commentController");
const authentication = require("../middlewares/authentication");

router.use(authentication);
router.get("/", commentController.getAllComments);
router.post("/", commentController.createComment);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;