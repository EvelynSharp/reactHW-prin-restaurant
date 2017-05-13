const express = require('express');
const router = express.Router();
const Princess = require('../models/princess');

router.get('/', (req, res) => {
  Princess.find( {}, (err, princesses) => {
    res.json(princesses);
  });
});

// router.get('/newprincess', function(req, res) {
//   res.render('newprincess.ejs');
// });

router.post('/', (req, res) => {
  const{
    princessName,
    favRest: {
      restName,
      priceRange,
      cuisine,
      description,
      rating
    },
    princessReview,
    imageURL
  } = req.body;

  new Princess ({
    princessName,
    favRest: {
      restName,
      priceRange,
      cuisine,
      description,
      rating
    },
    princessReview,
    imageURL
  }).save( (err, princess) =>{
    console.log(princess);
    res.json(princess);
  });

});

module.exports = router;
