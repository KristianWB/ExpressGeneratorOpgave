var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let beer1 = [{
    'Brand': 'Tuborg',
    'Name': 'Pilsner',
    'taste': 'urin',
    'rating': '3/10'
  },
  {
  'Brand': 'Carlsberg',
  'Name': 'Pilsner',
  'taste': 'gammelt urin',
  'rating': '2/10'
  }]
  
  //res.render('index', { title: 'Express', });
  res.json(beer1)
});

module.exports = router;