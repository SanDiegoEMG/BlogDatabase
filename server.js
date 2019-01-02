// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.

// *** Dependencies  ===========================================
var express = require("express");

// Sets up the Express App =============================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes for CONTRIBUTORS ==================================================
// require("./routes/api-routes.js")(app);

app.get("/", function (req, res) {
  res.send("Keep Calm and Code on!!")
});

app.get("/api/contributors", function(req, res){
  db.Contributor.findAll({}).then(function(data){
    res.json(data);
  });
});

app.post("/api/contributors", function (req,res){
  db.Contributor.create(req.body).then(function(data){
    res.json(data)
  })
})

// Routes for POSTS ==================================================
app.get("/api/posts", function(req, res){
  db.Post.findAll({}).then(function(data){
    res.json(data);
  });
});

app.post("/api/posts", function (req,res){
  db.Post.create(req.body).then(function(data){
    res.json(data)
  })
})

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: true}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
