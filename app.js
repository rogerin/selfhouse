var express         = require('express'),
    path            = require('path'),
    favicon         = require('static-favicon'),
    logger          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    expressSession  = require('express-session'),
    load            = require('express-load'),
    passport        = require('passport'),
    passportLocal   = require('passport-local'),
    mongoose        = require('mongoose'),
    flash           = require('express-flash'),
    app             = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(cookieParser('secret-string-yolanda-te-amo'));
app.use(expressSession({
                            secret: process.env.SESSION_SECRET || 'secret-string-yolanda-te-amo-demais',
                            saveUninitialized: false,
                            resave: false
                        }
                    )
        );
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));


load('models').then('controllers').then('routes').into(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

load('models').then('controllers').then('routes').into(app);

module.exports = app;