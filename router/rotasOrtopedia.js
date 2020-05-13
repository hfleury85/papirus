const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  console.log("servidor ORTOPEDIA iniciado");
  next();
});

// /ortopedia/quadril/

router.get('/ortopedia-quadril-necrose-avascular-quadril', function (req, res) {
    res.render("./ortopedia/quadril-necrose-avascular-do-quadril.ejs")
  });
  
  module.exports = router;