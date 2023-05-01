const router = require('express').Router();
const commentControler = require('../controllers/commentController');
const authentication = require('../middlewares/authentication');
const {commentAuthorization} = require('../middlewares/authorization');

router.use(authentication)
router.post('/', commentControler.createComment);
router.get('/', commentControler.getAllComments);
router.use('/:id', commentAuthorization);
router.put('/:id', commentControler.updateComment);
router.delete('/:id', commentControler.deleteComment);

module.exports = router;