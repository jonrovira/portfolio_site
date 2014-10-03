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

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'jQuery', 'Masonry', 'Ruby On Rails', 'Ruby'],

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

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'jQuery', 'Jekyll', 'Markdown'],

		layout      : 'portfolio_item',

	});
});

// GET Census page
router.get('/portfolio/census/', function(req, res) {
	res.render('census', {
		image       : '/images/Portfolio-census.png',
		title       : 'Census',
		date        : '4/25/14 - 4/28//14',
		roles       : ['Web Design', 'UI/UX Design', 'Front-end Development', 'Branding'],
		showGithub  : true,
		github      : 'https://github.com/jonrovira/hackathon2014',

		summary     : '<p>During RedesignNU, a hackathon hosted at Northwestern University, I, along with three friends built Census, a platform that allows students to communicate and share feedback with professors in real time during lecture. Using Census, students can communicate: “Please slow down”, “Could you repeat that last point?,” “Please give an example,” and other relevant items. My team recognized the problem that in large lectures, students often feel uncomfortable interrupting class to ask a question, even if that means not understanding a concept.</p><p>Building Census, we chose to use Meteor to facilitate the real time interaction. As the interface designer and front-end developer in the group, for me that meant understanding and implementing the template structure that Meteor uses in addition to my more standard responsibilities. I also developed and provided Census’ branding.</p><p>At the hackathon’s culmination and after a week of student voting, RedesignNU awarded my team the Student Choice award.</p>',

		technologies: ['HTML (5)', 'CSS (3)', 'Javascript', 'jQuery', 'Meteor.js', 'Adobe Illustrator'],

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

		summary     : '<p>I began working on RJ the summer after my freshman year at Northwestern University’s Neuroscience & Robotics Lab. RJ’s real name is Baxter, and he’s a 7 degree-of-freedom robot built by Rethink Robotics. My task was to create a demo using RJ that would advertise the lab as it ran non-stop in a popular student lounge. After about a month of becoming somewhat proficient in operating RJ and developing software for him, I decided to combine his capabilities with those of an Asus Xtion Pro, a sensor very similar to a Microsoft Kinect that uses infrared and depth-detection technology intelligently.</p><p>With these two powerful pieces of hardware, I created a natural interaction interface that allows passerby to stand in front of RJ and have their arm motions mimicked in real time by his own.</p><p>The demo ran for most of the 2013-2014 academic year in the Willens Atrium in Northwestern’s Technological Institute.</p><p>The following summer of 2014, I continued using RJ as I developed projects and curriculum for the new Master of Science in Robotics program at Northwestern.</p>',

		technologies: ['Python', 'C++', 'Robot Operating System (ROS)', 'Point Cloud Library', 'Asus Xtion Pro'],

		layout      : 'portfolio_item',

	});
});

// GET JonRovira Dot Com page
router.get('/portfolio/jonrovira-dot-com/', function(req, res) {
	res.render('jonrovira-dot-com', {
		image       : '/images/Portfolio-jonrovira-dot-com.png',
		title       : 'JonRovira.com',
		date        : '12/1/13 - 9/30/14',
		roles       : ['Web Design', 'Back-end Development', 'UI/UX Design', 'Front-end Development', 'Branding'],
		showGithub  : true,
		github      : 'https://github.com/jonrovira/portfolio_site',

		summary     : '<p>This website has been in iterative development since my senior year in high school when I first went through the HTML and CSS track on Codecademy.  I initially thought that it would be a little redundant to include it as an item in my portfolio here, but I’ve put a considerable amount of work into it and have learned immensely while building it, so I think it deserves to have a spot among the rest of the work I’ve done.</p><p>When I made the first instance of the site, my goal was just to put my newly learned knowledge of HTML and CSS to work and experiment in building a simple website. Since then, I’ve integrated multiple front-end and back-end tools into the site and I am comfortable saying that the result is a good representation of what I have done in web development, software development, and design.</p><p>To facilitate the contact form in a clean way and set up Handlebars, this site’s backend is built in Node with Express as a framework. The front-end view engine uses Handlebars and styling is done with SASS in addition to the typical HTML and Javascript/jQuery combination.</p>',

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'jQuery', 'Handlebars', 'NodeJS', 'Express', 'Adobe Illustrator'],

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

		summary     : '<p>Tasked with creating a tangible system that promoted learning, I, along with two teammates built DJ Raffe, a tool that helps children develop polyrhythmic skills. We recognized the difficulty present in learning polyrhythms, rhythms that involve playing multiple independent rhythms on top of each other, and agreed that adding a physical component to a digital interface would stimulate learning effectively.</p><p>Essentially, a user would be given two physical color-coded drums (green and blue) that send signals to our interface running in a browser whenever pressure sensors on the drums’ surfaces are triggered. The interface itself would stream notes across the screen in different polyrhythmic patterns and provide feedback when the user taps along to the rhythms correctly. To enhance the concept of rhythm, we even added an animated giraffe (hence, DJ Raffe) that passed across the screen once every rhythmic measure.</p><p>My role in developing DJ Raffe lay in designing and implementing the interface. In order to create a system that accurately modeled rhythm, the interface’s timing functionality was vital and required a more accurate time perception than Javascript’s setInterval() or setTimeout() functions could provide. Luckily, other developers had run into similar issues before and I was able to solve the problem using and enhancing methods they had found useful.</p>',

		technologies: ['HTML', 'CSS (3)', 'Javascript', 'jQuery'],

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

		technologies: ['HTML', 'PHP', 'CSS', 'Javascript', 'jQuery', 'Wordpress'],

		layout      : 'portfolio_item',

	});
});






module.exports = router;
