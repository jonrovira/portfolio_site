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
app.post('/', function(req, res) {

    // get contact form data
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jonrovira@gmail.com',
            pass: process.env.GMAIL_PASS
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from:     email, // sender address
        to:      'jonrovira@gmail.com', // list of receivers
        subject: 'JonRovira.com New Contact Form Submission', // Subject line
        html:    '<span>New contact form submission!</span><br><br><span><strong>Name: </strong>' + name + '</span><br><span><strong>Email: </strong>' + email + '</span><br><br><span><strong>Message: </strong>' + message + '</span><br><br><br><span>That\'s it for now. Killing the game.</span>',
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if( error ) {
            console.log(error);
            res.render('home', {
                contactFormFeedback: true,
                contactFormError: true,
                contactFormMsg: 'Error occured, message not sent.',
            });
        }
        else {
            console.log('Message sent: ' + info.response);
            res.render('home', {
                contactFormFeedback: true,
                contactFormError: false,
                contactFormMsg: 'Message sent! Thank you.',
            });
        }
    });
});


// catch 404 and forward to error handler
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
