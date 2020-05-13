const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});



////////////////////////////////

router.get('/', function (req, res) {
    // res.render("necrose-avascular-do-quadril")
    res.send("inicio")
  });
  
router.get('/sobre', function (req, res) {
    res.render("sobre");
  });

  router.get('/lista-de-artigos', function (req, res) {
    res.render("listaArtigos");
  });

  router.get('/login', function (req, res) {
    res.render("login");
  });
  

  router.get('/laudario', function (req, res) {
    res.render("./laudario/laudario");
  });





module.exports = router;