$(document).ready(function() {

	/*
	 * Functions
	 */

	// Setup the portfolio
	//   * Set width of items wrapper
	var setupPortfolio = function() {

		// Set width of portfolio items wrapper for slider to stay on one line
		var totalWidth = 0;
		$('section#portfolio div.section-content div#portfolio-items-wrapper ul#portfolio-gallery li').each(function() {
			totalWidth += $(this).outerWidth(true);
		});
		$('section#portfolio div.section-content div#portfolio-items-wrapper ul#portfolio-gallery').width(totalWidth + 29);

		animatePortfolio();
	};
	// Blur items outside visible scope
	var animatePortfolio = function() {
		
		// Get width of visilble region
		var visibleWidth = $('div#portfolio-items-wrapper').width();

		// Get coordinates of visible region
		var leftBoundary = $('section#portfolio div.section-content div#portfolio-items-wrapper').scrollLeft(); // this is changing on scroll
		var rightBoundary = leftBoundary + visibleWidth;

		// Get width of portfolio item
		var itemWidth = $('li.portfolio-item').width();

		// Determine which should be blurred, blur those
		// $('li.portfolio-item').each(function() {
		// 	var rightPosition = $(this).position().left + itemWidth;
		// 	if( rightPosition <= rightBoundary ) {
		// 		if( $(this).hasClass('portfolio-item-blurred') ) {
		// 			$(this).removeClass('portfolio-item-blurred');
		// 			$(this).fadeTo(400, 1.0);
		// 		}
		// 	}
		// 	else {
		// 		if( !$(this).hasClass('portfolio-item-blurred') ) {
		// 			$(this).addClass('portfolio-item-blurred');
		// 			$(this).fadeTo(400, 0.5);
		// 		}
		// 	}
		// });

		// Bold appropriate scroll indicators
		var leftOfFirst = $('ul#portfolio-gallery li:first-child').position().left;
		var rightOfLast = $('ul#portfolio-gallery li:last-child').position().left + itemWidth;
		if( leftOfFirst < leftBoundary ) {
			// bold
			$('i#portfolio-scroll-backward-indicator').addClass('active');
		}
		else {
			// unbold
			$('i#portfolio-scroll-backward-indicator').removeClass('active');
		}
		if( rightOfLast > rightBoundary ) {
			// bold
			$('i#portfolio-scroll-forward-indicator').addClass('active');	
		}
		else {
			// unbold
			$('i#portfolio-scroll-forward-indicator').removeClass('active');		
		}

		// Flash
		if( !$('i#portfolio-scroll-backward-indicator').hasClass('flashing') ) {
			$('i#portfolio-scroll-backward-indicator').addClass('flashing');
			var intervalLeft = setInterval(function() {
				if( $('i#portfolio-scroll-backward-indicator').hasClass('active') ) {
					$('i#portfolio-scroll-backward-indicator').fadeOut(900).fadeIn(900);
				}
			}, 2000);
		}
		if( !$('i#portfolio-scroll-forward-indicator').hasClass('flashing') ) {
			$('i#portfolio-scroll-forward-indicator').addClass('flashing');
			var intervalRight = setInterval(function() {
				if( $('i#portfolio-scroll-forward-indicator').hasClass('active') ) {
					$('i#portfolio-scroll-forward-indicator').fadeOut(900).fadeIn(900);
				}
			}, 2000);
		}
	}
	// Follow the mouse with eyes in about section
	var followMouseWithEyes = function(e) {

		// get mouse position
		var mouseTop = e.pageY;
		var mouseLeft = e.pageX;

		// get left eye position
		var $leftEye = $('div#eye-left div.eye-color-1');
		var leftEyeTop = $leftEye.offset().top;
		var leftEyeLeft = $leftEye.offset().left;

		// get right eye position
		var $rightEye = $('div#eye-right div.eye-color-1');
		var rightEyeTop = $rightEye.offset().top;
		var rightEyeLeft = $rightEye.offset().left;

		// left eye difference in position (normal x, y coordinate conventions)
		var leftDTop = leftEyeTop - mouseTop;
		var leftDLeft = mouseLeft - leftEyeLeft;

		// right eye difference in position
		var rightDTop = rightEyeTop - mouseTop;
		var rightDLeft = mouseLeft - rightEyeLeft;

		// Pixel positions for eye center
		var eyeCenter = [12, -2];

		// get requested eye position
		var leftEyePositionRequest = getEyePosition(leftDLeft, leftDTop);
		var rightEyePositionRequest = getEyePosition(rightDLeft, rightDTop);

		// get eye positions accounting for eye offsets
		var leftEyePositionX = eyeCenter[0] + leftEyePositionRequest[0];
		var leftEyePositionY = eyeCenter[1] - leftEyePositionRequest[1];
		var rightEyePositionX = eyeCenter[0] + rightEyePositionRequest[0];
		var rightEyePositionY = eyeCenter[1] - rightEyePositionRequest[1];

		// move eyes to positions
		$leftEye.css('left', leftEyePositionX);
		$leftEye.css('top', leftEyePositionY);
		$rightEye.css('left', rightEyePositionX);
		$rightEye.css('top', rightEyePositionY);
	}
	// Returns quadrant of x, y coordinates
	var getQuadrant = function(x, y) {
		if( x >= 0 && y >= 0 ) {
			return 1;
		}
		else if( x < 0 && y >= 0 ) {
			return 2;
		}
		else if( x < 0 && y < 0 ) {
			return 3;
		}
		else {
			return 4;
		}
	}
	// Gets 0-2pi radians angle of x, y coordinates
	var getAngle = function(x, y) {
		// get quadrant
		var quadrant = getQuadrant(x, y);
		var theta;

		// Calculate angle based on quadrant
		switch( quadrant ) {
			case 1:
				theta = Math.atan(y/x);
				break;
			case 2:
				theta = Math.PI - Math.atan(y/(-1 * x));
				break;
			case 3:
				theta = Math.PI + Math.atan((-1 * y)/(-1 * x));
				break;
			case 4:
				theta = (2 * Math.PI) - Math.atan((-1 * y)/x);
				break;
		}

		return theta;
	}
	// Mimic mouse angle to eye with pupil to center of eye
	var getEyePosition = function(x, y) {
		var position = [];

		// get mouse angle
		var thetaMouse = getAngle(x, y);

		// calculate pixel position with hypotenuse of 5px
		var xEye = 8 * Math.cos(thetaMouse);
		var yEye = 8 * Math.sin(thetaMouse);
		position = [xEye, yEye];

		return position;
	}
	// Get current page
	var getPage = function() {
		var page = $('main').attr('id');
		return page;
	}
	// Scroll to a section on page
	var scrollToSection = function(section) {
		$('html, body').animate({
			scrollTop: $(section).offset().top - 80
		}, 600);
		return false;
	};
	// Animate the skills graph
	var animateSkillsGraph = function() {
		var htmlHeight       = '95%',
		    cssHeight        = '90%',
		    javascriptHeight = '75%',
		    pythonHeight     = '85%',
		    cppHeight        = '80%';
		$('li#skill-html').animate({
			height: htmlHeight
		}, 1000);
		$('li#skill-css').animate({
			height: cssHeight
		}, 1000);
		$('li#skill-javascript').animate({
			height: javascriptHeight
		}, 1000);
		$('li#skill-python').animate({
			height: pythonHeight
		}, 1000);
		$('li#skill-cpp').animate({
			height: cppHeight
		}, 1000);
	};
	// Show the mobile navigation menu
	var toggleMobileNav = function() {
		if( $('header > nav > nav').is(':visible') ) {
			$('nav#header-social').slideUp();
			$('nav#header-menu').slideUp();
		}
		else {
			$('nav#header-social').before($('nav#header-menu'));
			$('nav#header-social').slideDown();
			$('nav#header-menu').slideDown();
		}
	};
	// Set welcome section padding to depend on screen height
	var setWelcomePadding = function() {

		// get window height
		var wHeight = $(window).height();

		// subtract header, h1, h2, and button
		wHeight -= $('header').height();
		wHeight -= $('section#welcome div.section-content').height();

		// calculate top and bottom paddings
		var pBottom = Math.round(wHeight * 0.44);
		var pTop = wHeight - pBottom + $('header').height() - 15; // - 15 to show hr below

		// set padding
		var padding = pTop + 'px 0 ' + pBottom + 'px';
		$('section#welcome div.section-content').css('padding', padding);
	};
	// Checks which browser is holding the site currently
	var checkWhichBrowser = function() {
		var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
		var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
		var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0; // At least Safari 3+: "[object HTMLElementConstructor]"
		var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
		var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6

		if( isOpera ) {
			return 'opera';
		}
		else if( isFirefox ) {
			return 'firefox';
		}
		else if( isSafari ) {
			return 'safari';
		}
		else if( isChrome ) {
			return 'chrome';
		}
		else if( isIE ) {
			return 'ie';
		}
	};
	// Corrects elements if site is loaded in Firefox
	var correctForFirefox = function() {
		// fixes border radius issue
		$('ul#frameworks-tools-libraries').css('border-style', 'solid');
		$('ul#item-roles li').css('border-style', 'solid');
	};
	// Shade correct item in navbar
	var shadeNavbarItem = function() {
		// current scroll position
		var scrollPos = $(document).scrollTop();

		// go through each item in navbar
		$('nav#header-menu ul li').each(function() {
			var $this = $(this);
			var $href = $($this.children('a').attr('href').replace('/',''));
			var frontBuffer = 230;
			var backBuffer = 0;

			// contact page case
			if($(window).scrollTop() + $(window).height() > $(document).height() - 140) {
		       $('nav#header-menu ul li').removeClass('active');
		       $('nav#header-menu ul li:nth-child(5)').addClass('active');
			}

			// this section, shade 
			else if( $href.position().top <= scrollPos + frontBuffer && $href.position().top + $href.height() > scrollPos - backBuffer ) {
				$('nav#header-menu ul li').removeClass('active');
				$this.addClass("active");
			}
			// not this section, unshade 
			else {
				$this.removeClass('active');
			}
		});
	};




	/*
	 * Events
	 */

	/* On any page */
	// Go to section on menu click
	$('nav#header-menu ul li').click(function(e) {
		e.preventDefault();
		// If on splash page, animate to section
		if( getPage() == 'splash' ) {
			var section = 'section#' + $(this).children('a').attr('href').replace('/#', '');
			scrollToSection(section);
		}
		else {
			var section = $(this).children('a').attr('href').replace('/#', '');
			window.location.href = '/#' + section;
		}
	});
	// Show the mobile nav menu on menu icon click
	$('i#menu-icon').click(function() {
		//placeholder for minimize
		toggleMobileNav();
	});

	/* Conditional on browser */
	var browser = checkWhichBrowser();
	switch( browser ) {
		case 'opera':
			break;
		case 'firefox':
			correctForFirefox();
			break;
		case 'safari':
			break;
		case 'chrome':
			break;
		case 'ie':
			break;
	}

	/* Conditional on page */
	var page = getPage();
	switch( page ) {
		// Run on splash page
		case 'splash':
			setWelcomePadding();
			setupPortfolio();
			// Scroll to portfolio on welcome circle button click
			$('div#welcome-circle').click(function() {
				// placeholder for minimize
				scrollToSection('section#portfolio');
			});
			// Blur next item in portfolio on scroll within portfolio
			$('section#portfolio div.section-content div#portfolio-items-wrapper').scroll(function() {
				// placeholder for minimize
				animatePortfolio();
			});
			// Animate skill graph on scroll to skills section
			$(window).scroll(function() {
				// Animate skills graph
				if( ($('body').scrollTop() > $('hr#hr-after-welcome').offset().top + 120) || ($('html, body').scrollTop() > $('hr#hr-after-welcome').offset().top + 120) ) {
					animateSkillsGraph();
				}

				// Shade correct item in navbar
				shadeNavbarItem();
			});
			// Follow mouse with eyes whenever mouse moves
			$(document).mousemove(function(e) {
				// placeholder for minimize
				followMouseWithEyes(e);
			});
			break;
	}

});