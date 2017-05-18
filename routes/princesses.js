const express = require('express');
const router = express.Router();
const Princess = require('../models/princess');

router.get('/', (req, res) => {
  Princess.find( {}, (err, princesses) => {
    res.json(princesses);
  });
});

router.delete('/:_id', (req, res) => {
  Princess.findById(req.params._id, (err, princess) => {
    princess.remove();
    res.status(200).send({success: true});
  })

});

router.put('/:_id', (req, res) => {
  Princess.findById(req.params._id, (err, princess) => {
    princess.princessReview = req.body.princessReview;
    res.json(princess)
    princess.save();
  });
});


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
    res.json(princess);
  });

});

module.exports = router;
