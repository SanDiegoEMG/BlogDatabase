var db = require("../models"); // gives ability to reference all files in models folder

module.exports(app){   // express routing being utilized
app.get("/api/posts", function(req, res){
    db.Post.findAll({}).then(function(data){
      res.json(data);
    });
  });
  
  app.post("/api/posts", function (req,res){
    db.Post.create(req.body).then(function(data){
      res.json(data)
    });
  });
};