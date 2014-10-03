/*
    Heart of app
 */


// Instantiate packages, dependencies, node functionality
var express      = require('express'),
    exphbs       = require('express-handlebars'),
    path         = require('path'),
    favicon      = require('static-favicon'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    nodemailer   = require('nodemailer');


// Define router locations
var routes = require('./routes/index');
var users  = require('./routes/users');


// Instantiate Express
var app = express();


// View engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    helpers: {
        printRolesList: function(items) {
            var out = "<ul id='item-roles'>";

            for( var i=0, l=items.length; i<l; i++ ) {
                out = out + "<li>" + items[i] + "</li>";
            }

            return out + "</ul>";
        },
        printTechnologyList: function(items) {
            var out = "<ul id='item-technologies'>";

            for( var i=0, l=items.length; i<l; i++ ) {
                out = out + "<li class='list-square'>&#x25A0;</li>"
                out = out + "<li>" + items[i] + "</li>";
            }

            return out + "</ul>";
        }
    }
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/images/favicon.ico'));


// App logger
app.use(logger('dev'));


// Parser shit
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


// Set up routers
app.use('/', routes);
app.use('/users', users);


// Mailer
// app.post('/', function(req, res){
//     // Variable initialization
//     var mailOpts, smtpTrans;

//     // Login info
//     smtpTrans = nodeMailer.createTransport('SMTP', {
//         service: 'Gmail',
//         auth: {
//             user: "jonrovira@gmail.com",
//             pass: "Lovelivewin007*"
//         }
//     });

//     // Mail options
//     mailOpts = {
//         from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from request body object
//         to: 'jonrovira@gmail.com',
//         subject: 'JonRovira.com Contact Form',
//         text: req.body.message
//     };

//     smtpTrans.sendMail(mailOpts, function(error, response) {
//         // Email not sent
//         if( error ) {
//             res.render('home', {
//                 msg: 'Error occured, message not sent.',
//                 err: true
//             });
//         }
//         // Success
//         else {
//             res.render('home', {
//                 msg: 'Message sent! Thank you.',
//                 err: false
//             });
//         }
//     });

// });

app.post('/', function(req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jonrovira@gmail.com',
            pass: 'Lovelivewin007*'
        }
    });M
    transporter.sendMail({
        from: 'jonrovira591@gmail.com',
        to: 'jonrovira@gmail.com',
        subject: 'hello',
        text: 'hello world!'
    }, res.render('home'));
});


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/* error handlers*/
// development error handler - will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler - no stacktrace
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// Export the app for other modules to use
module.exports = app;
