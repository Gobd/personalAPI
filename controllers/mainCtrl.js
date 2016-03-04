var me = {
    name: "Brian Kemper"
  , location: "Midvale, UT"
  , occupations: ["Programmer", "Eater", "Runner", "ZZZZZer"]
  , hobbies: [
    {name: "Running"
  , type: "Current"}
  ,{
    name: "Fishing"
  , type: "Past"
  }
  ]
  , skillz: [
    {
      "id": 1,
      "name": "Javascript",
      "experience": "Intermediate"
    }
    , {
      "id": 2,
      "name": "Person",
      "experience": "Intermediate"
    }
    , {
      "id": 3,
      "name": "Sitting",
      "experience": "Master"
    }
  ]
};

module.exports = {

  getName: function(req, res, next) {
    res.status(200).json({name: me.name});
},
  getLocation: function(req, res, next) {
    res.status(200).json({location: me.location});
},
//localhost:8080/occupations/?order=asc
  getOccupations: function(req, res, next) {
    var order = req.query.order;
    if (order === 'asc') {
      res.status(200).json({occupations: me.occupations.sort()});
    } else if  (order === 'desc') {
      res.status(200).json({occupations: me.occupations.sort().reverse()});
    } else {
      res.status(200).json({occupations: me.occupations});
    }
},
  getOccupationsLatest: function(req, res, next) {
    res.status(200).json({occupations: me.occupations[me.occupations.length-1]});
},
  getHobbies: function(req, res, next) {
    res.status(200).json({hobbies: me.hobbies});
},
  getSkillz: function(req, res, next) {
    var exp = req.query.experience;
    var ret = [];
    if (exp) {
      me.skillz.forEach(function(obj){
        if(obj.experience === exp) {
          ret.push(obj);
        }
      });
      res.status(200).json(ret);
    } else {
      res.status(200).json(me.skillz);
    }
},
  getHobbiesType: function(req, res, next) {
    var type = req.params.type;
    var ret = [];
    me.hobbies.forEach(function(obj){
      if(obj.type === type) {
        ret.push(obj.name);
      }
    });
    res.status(200).json(ret);
},
  putName: function(req, res, next) {
    me.name = req.body.name;
    res.status(200).json(me.name);
},
  putLocation: function(req, res, next) {
    me.location = req.body.location;
    res.status(200).json(me.location);
},
  postHobbies: function(req, res, next) {
    me.hobbies.push(req.body);
    res.status(200).json(me.hobbies);
},
  postOccupations: function(req, res, next) {
    me.occupations.push(req.body.occupations);
    res.status(200).json(me.occupations);
},
  generateId: function(req, res, next) {
    var skillz = req.body.skillz;
    skillz.id = me.skillz.length + 1;
    next();
},
  postSkillz: function(req, res, next) {
    me.skillz.push(req.body.skillz);
    res.status(200).json(me.skillz[me.skillz.length - 1]);
},
  getSecrets: function(req, res, next) {
    if (req.params.username === 'itsme' && req.params.pin === '1111') {
      res.status(200).json('youdabes');
    } else {
      next('nodabes');
    }
}



};
