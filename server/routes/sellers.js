const express = require('express');
// Initialize app
const router = express.Router();

const Seller = require('../models/seller');
router.get('/', function (req, res) {
      let sellers = Seller.find({}, function(err, sellers){
        if(err){
            console.log(err);
        }
        else {
            res.json(sellers);
        }
    });
});
module.exports = router;