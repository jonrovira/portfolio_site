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

// GET The Book page
router.get('/portfolio/the-book/', function(req, res) {
	res.render('the-book', {
		image       : '/images/Portfolio-the-book.png',
		title       : 'The Book',
		date        : '7/1/14 - 9/30/14',
		roles       : ['Web Design', 'UI/UX Design', 'Front-end Development'],
		showGithub  : true,
		github      : 'https://github.com/Finnja/thebook',

		summary     : 'Lorem ipsum dolor sit amet, aeque percipit percipitur ex vel, an mea vitae contentiones reprehendunt. Sit lorem feugait ex, tantas impetus fabellas cum in. Has decore putent elaboraret ne, velit graecis id has, vero doctus nominati pro ad. Prima saperet adipisci sea ad, vim et nostro delicatissimi. Reque summo saperet ne per. Cum ea iriure molestie, sed eu quodsi appareat imperdiet, et mel saperet deleniti.',

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'JQuery', 'Masonry', 'Ruby On Rails'],

		layout      : 'portfolio_item',

	});
});

// GET Master of Science in Robotics Site page
router.get('/portfolio/master-of-science-in-robotics-website/', function(req, res) {
	res.render('master-of-science-in-robotics-website', {
		image       : '/images/Portfolio-master-of-science-in-robotics-website.png',
		title       : 'Master of Science in Robotics Website',
		date        : '7/15/14 - 9/30/14',
		roles       : ['Web Design', 'Back-end Development', 'UI/UX Design', 'Front-end Development'],
		showGithub  : true,
		github      : 'https://github.com/jonrovira/msr-site',

		summary     : 'Lorem ipsum dolor sit amet, aeque percipit percipitur ex vel, an mea vitae contentiones reprehendunt. Sit lorem feugait ex, tantas impetus fabellas cum in. Has decore putent elaboraret ne, velit graecis id has, vero doctus nominati pro ad. Prima saperet adipisci sea ad, vim et nostro delicatissimi. Reque summo saperet ne per. Cum ea iriure molestie, sed eu quodsi appareat imperdiet, et mel saperet deleniti.',

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'JQuery', 'Jekyll', 'Markdown'],

		layout      : 'portfolio_item',

	});
});

// GET Census page
router.get('/portfolio/census/', function(req, res) {
	res.render('census', {
		image       : '/images/Portfolio-census.png',
		title       : 'Census',
		date        : '4/25/14 - 4/28//14',
		roles       : ['Web Design', 'UI/UX Design', 'Front-end Development'],
		showGithub  : true,
		github      : 'https://github.com/jonrovira/hackathon2014',

		summary     : 'Lorem ipsum dolor sit amet, aeque percipit percipitur ex vel, an mea vitae contentiones reprehendunt. Sit lorem feugait ex, tantas impetus fabellas cum in. Has decore putent elaboraret ne, velit graecis id has, vero doctus nominati pro ad. Prima saperet adipisci sea ad, vim et nostro delicatissimi. Reque summo saperet ne per. Cum ea iriure molestie, sed eu quodsi appareat imperdiet, et mel saperet deleniti.',

		technologies: ['HTML (5)', 'CSS (3)', 'Javascript', 'JQuery', 'Meteor'],

		layout      : 'portfolio_item',

	});
});

// GET RJ page
router.get('/portfolio/rj/', function(req, res) {
	res.render('rj', {
		image       : '/images/Portfolio-rj.jpg',
		title       : 'RJ',
		date        : '6/1/13 - 12/1/14',
		roles       : ['Software Development', 'UI/UX Design'],
		showGithub  : true,
		github      : 'https://github.com/NxR-Baxter/nxr_baxter',

		summary     : 'Lorem ipsum dolor sit amet, aeque percipit percipitur ex vel, an mea vitae contentiones reprehendunt. Sit lorem feugait ex, tantas impetus fabellas cum in. Has decore putent elaboraret ne, velit graecis id has, vero doctus nominati pro ad. Prima saperet adipisci sea ad, vim et nostro delicatissimi. Reque summo saperet ne per. Cum ea iriure molestie, sed eu quodsi appareat imperdiet, et mel saperet deleniti.',

		technologies: ['Python', 'Robot Operating System (ROS)', 'Point Cloud Library', 'Asus Xtion Pro'],

		layout      : 'portfolio_item',

	});
});

// GET JonRovira Dot Com page
router.get('/portfolio/jonrovira-dot-com/', function(req, res) {
	res.render('jonrovira-dot-com', {
		image       : '/images/Portfolio-jonrovira-dot-com.png',
		title       : 'JonRovira.com',
		date        : '12/1/13 - 9/30/14',
		roles       : ['Web Design', 'Back-end Development', 'UI/UX Design', 'Front-end Development'],
		showGithub  : true,
		github      : 'https://github.com/jonrovira/portfolio_site',

		summary     : 'Lorem ipsum dolor sit amet, aeque percipit percipitur ex vel, an mea vitae contentiones reprehendunt. Sit lorem feugait ex, tantas impetus fabellas cum in. Has decore putent elaboraret ne, velit graecis id has, vero doctus nominati pro ad. Prima saperet adipisci sea ad, vim et nostro delicatissimi. Reque summo saperet ne per. Cum ea iriure molestie, sed eu quodsi appareat imperdiet, et mel saperet deleniti.',

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'JQuery', 'Handlebars', 'NodeJS', 'Express'],

		layout      : 'portfolio_item',

	});
});

// GET DJ Raffe page
router.get('/portfolio/dj-raffe/', function(req, res) {
	res.render('dj-raffe', {
		image       : '/images/Portfolio-dj-raffe.png',
		title       : 'DJ Raffe',
		date        : '1/1/14 - 6/15/14',
		roles       : ['Product Research', 'Web Design', 'UI/UX Design', 'Front-end Development'],
		showGithub  : true,
		github      : 'https://github.com/jonrovira/TIDAL-Project',

		summary     : 'Lorem ipsum dolor sit amet, aeque percipit percipitur ex vel, an mea vitae contentiones reprehendunt. Sit lorem feugait ex, tantas impetus fabellas cum in. Has decore putent elaboraret ne, velit graecis id has, vero doctus nominati pro ad. Prima saperet adipisci sea ad, vim et nostro delicatissimi. Reque summo saperet ne per. Cum ea iriure molestie, sed eu quodsi appareat imperdiet, et mel saperet deleniti.',

		technologies: ['HTML', 'CSS (3)', 'Javascript', 'JQuery'],

		layout      : 'portfolio_item',

	});
});

// GET AirHop page
router.get('/portfolio/airhop-website/', function(req, res) {
	res.render('airhop-website', {
		image       : '/images/Portfolio-airhop-website.jpg',
		title       : 'AirHop Website',
		date        : '10/1/13 - 11/1/13',
		roles       : ['Web Design', 'Back-end Development', 'UI/UX Design', 'Front-end Development'],
		showGithub  : false,
		github      : '',

		summary     : 'Lorem ipsum dolor sit amet, aeque percipit percipitur ex vel, an mea vitae contentiones reprehendunt. Sit lorem feugait ex, tantas impetus fabellas cum in. Has decore putent elaboraret ne, velit graecis id has, vero doctus nominati pro ad. Prima saperet adipisci sea ad, vim et nostro delicatissimi. Reque summo saperet ne per. Cum ea iriure molestie, sed eu quodsi appareat imperdiet, et mel saperet deleniti.',

		technologies: ['HTML', 'PHP', 'CSS', 'Javascript', 'JQuery', 'Wordpress'],

		layout      : 'portfolio_item',

	});
});



module.exports = router;
