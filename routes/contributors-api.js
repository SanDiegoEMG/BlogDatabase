var db = require("../models"); // gives ability to reference all files in models folder

module.exports(app){   // express routing being utilized
    app.get("/api/contributors", function(req, res){
        db.Contributor.findAll({}).then(function(data){
          res.json(data);
        });
      });
      
      app.post("/api/contributors", function (req,res){
        db.Contributor.create(req.body).then(function(data){
          res.json(data)
        });
      });
      
};