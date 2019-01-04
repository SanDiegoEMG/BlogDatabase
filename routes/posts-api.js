var db = require("../models"); // gives ability to reference all files in models folder

<<<<<<< HEAD
module.exports = function(app){   // express routing being utilized
=======
module.exports(app){   // express routing being utilized
>>>>>>> 2764cd54c4d675a1deba8072624934a73bbc6c5b
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