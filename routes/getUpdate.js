var express = require('express')
var router = express.Router()
var validator = require('express-validator/check')
var debug = require('debug')('route/getUpdate')

/* Get update from telegram webhook */
router.post('/', [
    // check if incoming message is a photu

    validator.body('message.photo').exists()
],(req, res, next) => {
    try {
        validator.validationResult(req).throw()
        
        //do bwController stuff
    } catch(err) {
        debug('Incoming message not a photu')
    }

    res.sendStatus(200)
})

module.exports = router;
