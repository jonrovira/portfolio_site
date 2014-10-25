/*
	Main router
 */


// Use Express, create Express router
var express = require('express');
var router = express.Router();


// GET home page
router.get('/', function(req, res) {
	res.sendfile('../views/home.html'); // load the single view file (angular will handle the page changes on the front-end)
});

/* 
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

// GET For The Philanthropist Site page
router.get('/portfolio/for-the-philanthropist-website/', function(req, res) {
	res.render('for-the-philanthropist-website', {
		image       : '/images/Portfolio-for-the-philanthropist-website.png',
		title       : 'For The Philanthropist Website',
		date        : '6/15/14 - 8/15/14',
		roles       : ['Web Design', 'UI/UX Design', 'Front-end Development'],
		showGithub  : true,
		github      : 'https://github.com/jonrovira/For-The-Philanthropist',

		summary     : '<p>For The Philanthropist, a company devoted to engaging and assisting non-profits in meeting their philanthropic goals and enacting social change, approached me at the beginning of the summer of 2014 to ask me to develop its new website. The company primarily wanted an informational site that advertised their work in a clean and intuitive way.</p><p>To complement For The Philanthropist’s noble and morally clean business goals, the interfaced I designed features a simple structure with carefully picked font faces and minimalistic themes.</p>',

		technologies: ['HTML (5)', 'CSS (3)', 'SASS', 'Javascript', 'jQuery', 'PHP'],

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

		summary     : '<p>This website has been in iterative development since my senior year in high school when I first went through the HTML and CSS track on Codecademy.  I initially thought that it would be a little redundant to include it as an item in my portfolio here, but I’ve put a considerable amount of work into it and have learned immensely while building it, so I think it deserves to have a spot among the rest of the work I’ve done.</p><p>When I made the first instance of the site, my goal was just to put my newly learned knowledge of HTML and CSS to work and experiment in building a simple website. Since then, I’ve integrated multiple front-end and back-end tools into the site and I am comfortable saying that the result is a good representation of what I have done in web development, software development, and design.</p><p>To facilitate the contact form in a clean way and set up Handlebars, this site’s backend is built in Node with Express as its framework. The front-end view engine uses Handlebars and styling is done with SASS in addition to the typical HTML and Javascript/jQuery combination.</p>',

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

		summary     : '<p>At the beginning of my sophomore year in college,  a friend and then-CEO of AirHop approached me to ask if I would build the company’s new website. I agreed, but under the time-constraint of creating the back-end heavy site in three weeks, I resorted to using Wordpress. After hustling to learn the CMS’s structure and maintenance process and maneuvering plugin development and modification, I churned out the new site.</p><p>This past year, it had a 3,500 unique-user traffic with over 30,000 page views and served as the $16,000-revenue company’s primary operational tool. After developing the site, I was brought on as the company’s CTO and have since been promoted to the Co-CEO.</p><p>AirHop is a student-run transportation company that provides students with a shuttle service from Northwestern’s campus to both O’Hare and Midway airports during major student breaks.</p>',

		technologies: ['HTML', 'PHP', 'CSS', 'Javascript', 'jQuery', 'Wordpress'],

		layout      : 'portfolio_item',
	});
});
*/





module.exports = router;
