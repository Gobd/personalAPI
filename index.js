var express = require('express')
  , bodyParser = require('body-parser')
  , port = 8080
  , app = express()
  , middleware = require('./controllers/middleware.js')
  , mainCtrl = require('./controllers/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.listen(post, function(){
  console.log('Listening on port: ' + port);
});
