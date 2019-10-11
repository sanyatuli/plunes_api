const express = require('express');
const router = express.Router();
const userService = require('../services/user.services');


router.post('/users/postquery', postquery);
module.exports = router;
//router.post('/users/', register);

function postquery(req, res, next) {
    console.log(req.body);
    userService.postquery(req.body)
        .then(() => res.json({"success": true , message:"Posted Successfully" }))
        .catch(err => next(err));
}




/*

function notify(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({"success":true,message:"Notified Successfully"}))
        .catch(err => next(err));
}
*/











