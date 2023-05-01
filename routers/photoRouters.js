const router = require('express').Router();
const photoController = require('../controllers/photoController');
const authentication = require('../middlewares/authentication');
const {photoAuthorization} = require('../middlewares/authorization');

router.get('/all', photoController.getAllPhotosWithUser);
router.use(authentication);
router.post('/', photoController.createPhoto);
router.get('/', photoController.getAllPhotos);
router.use('/:id', photoAuthorization);
router.put('/:id', photoController.updatePhoto);
router.delete('/:id', photoController.deletePhoto);

module.exports = router;