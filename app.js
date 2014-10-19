/*
    Heart of app
 */


// Instantiate packages, dependencies, node functionality
var express        = require('express'),
    favicon      = require('static-favicon'),
    morgan         = require('morgan'), // logs requests to the console
    bodyParser     = require('body-parser'), // pulls information from HTML POST
    methodOverride = require('method-override'); // simulates DELETE and PUT


// Instantiate Express
var app = express();


// Configuration
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


// GET home page
app.get('*', function(req, res) {
    res.sendfile('views/home.html'); // load the single view file (angular will handle the page changes on the front-end)
});


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
