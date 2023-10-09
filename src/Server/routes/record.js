const router = require('express').Router()
const controller = require('../controllers/record')

router.post('/save', controller.saveRecordControl)
router.post('/info/:clientID', controller.recordInfoControl)

module.exports = router
