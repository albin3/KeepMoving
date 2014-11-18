var log4js = require('log4js');
var express = require('express');
var app = express();

//config
log4js.configure({
    appenders: [
            { type: 'console' }, 
            { type: 'file', 
              filename: 'log/log4js.log', 
              category: 'log4jslog',
              maxLogSize: 204800,
              backups: 10 
            }
    ]
});

// define Logger
var logger = log4js.getLogger('log4jslog');
app.use(log4js.connectLogger(logger, { level: 'auto' }));

app.get('/', function(req, res) {
    res.json({ret: 1});
});
require('./app/routes/account').register(app);
require('./app/routes/blog').register(app);

app.listen(3024);
console.log("listen at port 3000");
