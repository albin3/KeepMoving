var md = require('markdown').markdown;

exports.register = function(app) {
  app.get('/u/signin', function(req, res) { res.send(md.toHTML("**header1**\n>hello ")); });
};

