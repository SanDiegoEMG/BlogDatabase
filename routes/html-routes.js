var db = require("../models"); // gives ability to reference all files in models folder

module.exports = function(app){ 
    app.get("/", function (req, res) {
        res.send("Keep Calm and Code on!! Even when the goin' is slow... ")
    });
};