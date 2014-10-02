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

		summary     : '<p>Along with another brother in my fraternity, I built The Book to serve as a tool dedicated to the Rush process at my university. Essentially, members in our Greek organization are now able to better organize and sort through new prospective members as we learn more about them. More importantly, The Book acts as a platform where we can quantify interest in those prospective members and visually represent the progress of our recruitment process.</p><p>My primary role in the creation of The Book was in conceiving its design and implementing its front-end development. This was actually my first time working on a project built in Ruby on Rails, so my first step was just tackling the slight learning curve that goes along with that: understanding the Rails structure and getting the hang of embedded ruby. Afterwards, in the development of the site, I also utilized Masonry, a grid layout library to display the array of prospective members.</p><p>Approximately 120 people are now actively using The Book.</p>',

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'JQuery', 'Masonry', 'Ruby On Rails', 'Ruby'],

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

		summary     : '<p>After working for a summer to develop projects and curriculum for one of the courses in the new Master of Science in Robotics Program at Northwestern University, my boss asked me to build the new program’s website. His vision was to have a site that adequately displayed everything that the program’s students would be working on in addition to housing a database of resources that students and faculty would contribute to over time. In addition, he wanted a website that could be easily maintained using GitHub and Markdown.</p><p>To meet that last requirement in particular, I chose to develop the website using Jekyll, a “back-end” (not really) static-site generator. Jekyll’s main strengths include its incredibly painless integration into the GitHub Pages hosting service and its feature that allows a site’s content to be optionally maintained in Markdown.</p>',

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
