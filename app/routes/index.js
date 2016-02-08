'use strict';

var path = process.cwd();
module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            var userAgent = req.get('user-agent');
            var obj = {
                ip: req.headers['x-forwarded-for'] ||
					req.connection.remoteAddress,
                userAgent: userAgent.substring(userAgent.indexOf('(') + 1,
                    userAgent.indexOf(')')),
                lang: req.acceptsLanguages()[0]
            };

            res.type("application/json");
            res.send(obj);
        });
};
