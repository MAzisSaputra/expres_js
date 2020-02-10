var express = require('express');
var router = express.Router();
const Post = require('../model/inventory');

router.post('/store', function(req, res) {
    Post.store(req.body, function(err, result) {
        // redirect ke halaman yang diinginkan 
        res.redirect('')
    })
})