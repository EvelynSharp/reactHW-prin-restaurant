const express = require('express');
const router = express.Router();
const Princess = require('../models/princess');

router.get('/', (req, res) => {
  Princess.find( {}, (err, princesses) => {
    res.json(princesses);
  });
});


module.exports = router;
