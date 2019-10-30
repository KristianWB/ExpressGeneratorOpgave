var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let number1= {
        'Brand': 'Tuborg',
    'Name': 'Pilsner',
    'taste': 'urin',
    'rating': '3/10'
  }
res.render('om-os', { title: 'Om os', });
});

module.exports = router;