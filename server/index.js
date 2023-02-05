const express = require("express");
var bodyParser = require('body-parser');
var routes = require('./routes');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.json({
    type: ['application/json', 'text/plain']
}))

app.get("/api", routes.get_articles);
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});