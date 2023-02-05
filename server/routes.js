var db = require("./models")

var getRecentArticles = function(req, res) {
    db.get_articles(function(data) {
        res.json({message: data});
    })
}

var routes = { 
    get_articles: getRecentArticles,
}
  
module.exports = routes;