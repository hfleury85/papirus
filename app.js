
/// VARIÁVEIS GERAIS
const express = require('express');
const ejs = require("ejs")
const bodyParser = require("body-parser")
const port = process.env || 3000;


//////// VARIÁVEIS DE MIDDLEWARE
const rotaGeral = require("./router/rotasGerais.js");
const rotasOrtopedia = require("./router/rotasOrtopedia.js")
const rotasAbdomen = require("./router/rotasAbdomen.js")

//////// Express
const app = express();


//////MIDDLEWARE
app.set('view engine', 'ejs'); ///// EJS
app.use(bodyParser.urlencoded({extended:true})); //BODY PARSER

////// ARQUIVOS ESTÁTICOS
app.use(express.static("public"));
app.use(express.static(__dirname + '/router'));

////// ROTAS EXPRESS
app.use(rotaGeral);
app.use(rotasOrtopedia);
app.use(rotasAbdomen);


////////////////////////////////// SERVIDOR 

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});














////////////////////////////

///// passport
// const mongoose = require("mongoose")
// 
// const session = require('express-session');
// const passport = require("passport");
// const passportLocalMongoose = require('passport-local-mongoose');

// ////// PASSPORT /SESSIONS ( fica no fim dos USE e acima do mongoose)

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   // cookie: { secure: true }
// }))

// app.use(passport.initialize());
// app.use(passport.session());
// // app.use(app.router);

// /////////////// MONGOOSE

// mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.set('useCreateIndex', true) ///deprecation warning

// const userSchema = new mongoose.Schema({

//     user: String,
//     password: String

// });

// //passport
// userSchema.plugin(passportLocalMongoose);
// const User = new mongoose.model("User",userSchema)


// passport.use(User.createStrategy()); 
// // use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



// app.get("/secrets", function(req,res){

//     if(req.isAuthenticated()){
//       res.render("secrets")
//     }
//     else{
//       redirect("/login")
//     }

// });

// app.post("/login", function(req, res){

 
//    console.log("requisicao ok")
  
 
//   User.register({username:req.body.usuario}, req.body.senha, function(err, user) {

//     console.log("User ----");

//     if (err) {   res.redirect("/login")   }
    

//     passport.authenticate("local")(req,res,function(){  res.send("ok") })

   
//         console.log("autenticao ok1")
//        });

//   console.log("nivel ok2")

// })