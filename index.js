var express = require('express')
  , bodyParser = require('body-parser')
  , port = 8080
  , app = express()
  , middleware = require('./controllers/middleware.js')
  , mainCtrl = require('./controllers/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/skillz', mainCtrl.getSkillz);

app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);

app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/skillz', mainCtrl.postSkillz);

app.listen(port, function(){
  console.log('Listening on port: ' + port);
});
