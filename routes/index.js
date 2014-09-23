/*
	Main router
 */


// Use Express, create Express router
var express = require('express');
var router = express.Router();


// GET home page
router.get('/', function(req, res) {
  res.render('home');
});
// GET
router.get('/portfolio/the-book/', function(req, res) {
	res.render('the-book', {
		layout: 'portfolio_item',
		image : 'http://unsplash.it/400?random',
		title : 'The Book',
		date  : '7/1/14 - 9/30',
		role  : 'Front-end Development',
		github: 'https://github.com/Finnja/thebook'
	});
});

module.exports = router;
