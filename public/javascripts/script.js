$(document).ready(function() {

	/*
	 * Functions
	 */

	// Follow the mouse with eyes in about section
	var followMouseWithEyes = function(e) {

		// don't do it on mobile devices because it doesn't work
		if( $(window).width() > 500 ) {
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
		return;
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
		return;
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
		return;
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
		return;
	};
	// Corrects elements if site is loaded in Firefox
	var correctForFirefox = function() {
		// fixes border radius issue
		$('ul#frameworks-tools-libraries').css('border-style', 'solid');
		$('ul#item-roles li').css('border-style', 'solid');
		return;
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
		return;
	};
	// Set portfolio item overlay height
	var setPIOverlayHeight = function() {
		var ht = $('img.portfolio-item-image').height();
		$('div.portfolio-item-overlay').height(ht + 15);
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
			// Size welcome section correctly depending on screen height
			setWelcomePadding();

			// Scroll to portfolio on welcome circle button click
			$('div#welcome-circle').click(function() {
				// placeholder for minimize
				scrollToSection('section#portfolio');
			});
			// Set overlay height on portfolio item overlay
			setPIOverlayHeight();
			// Animate skill graph on scroll to skills section
			$(window).scroll(function() {
				var wWidth = $(window).width();

				if( wWidth > 525) {
					if( ($('body').scrollTop() > $('section#skills').offset().top - 600) || ($('html, body').scrollTop() > $('section#skills').offset().top - 600) ) {
						animateSkillsGraph();
					}	
				}
				else {
					if( ($('body').scrollTop() > $('section#skills').offset().top - 300) || ($('html, body').scrollTop() > $('section#skills').offset().top - 300) ) {
						animateSkillsGraph();
					}
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