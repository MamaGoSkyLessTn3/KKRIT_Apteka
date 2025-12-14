const Router = require('express')
const router = new Router()
const mainController = require('../controllers/controller')


router.post('/application', mainController.createApplication)
router.get('/doctors', mainController.getAllDoctors)
router.get('/services', mainController.getAllServices)

module.exports = router
