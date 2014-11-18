
exports.register = function(app) {
  app.get('/blog', function(req, res) { res.end('blog'); });
};

