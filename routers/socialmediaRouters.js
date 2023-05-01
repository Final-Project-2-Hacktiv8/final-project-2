const router = require('express').Router()
const socialmediaController = require('../controllers/socialmediaController')
const authentication = require('../middlewares/authentication')
const {socialMediaAuthorization} = require('../middlewares/authorization')

router.use(authentication)
router.post('/', socialmediaController.createSocialMedia)
router.get('/', socialmediaController.getAllSocialMedia)
router.use('/:id', socialMediaAuthorization)
router.put('/:id', socialmediaController.updateSocialMedia)
router.delete('/:id', socialmediaController.deleteSocialMedia)

module.exports = router