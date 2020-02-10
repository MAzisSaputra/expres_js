var express = require('express');
var router = express.Router();
var Users = require('../model/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* POST check login */
router.post('/', async function(req, res){
    console.log(req);
    const {body} = req;
    Users.authLogin(body, function(err,result){
        res.send({
            result,
            error: err
        })
    })
})

module.exports = router;
