const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  console.log("servidor abdomen iniciado");
  next();
});




////////////////////////////////////////////

//// FIGADO / HEPATICO

///////////////////////////////////////////

router.get('/abdomen-figado-hemangioma', function (req, res) {
  res.render("./abdomen/figado-hemangioma.ejs")
});







////////////////////////////////////////////

//// RIM / RINS

///////////////////////////////////////////

  router.get('/abdomen-rim-angiomiolipoma', function (req, res) {
    res.render("./abdomen/rim-angiomiolipoma.ejs")
  });

  router.get('/rim-carcinoma-celulas-claras', function (req, res) {
    res.render("./abdomen/rim-carcinoma-celulas-claras.ejs")
  });
  
  module.exports = router;