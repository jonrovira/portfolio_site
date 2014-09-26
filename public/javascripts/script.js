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
		$('li.portfolio-item').each(function() {
			var rightPosition = $(this).position().left + itemWidth;
			if( rightPosition <= rightBoundary ) {
				if( $(this).hasClass('portfolio-item-blurred') ) {
					$(this).removeClass('portfolio-item-blurred');
					$(this).fadeTo(400, 1.0);
				}
			}
			else {
				if( !$(this).hasClass('portfolio-item-blurred') ) {
					$(this).addClass('portfolio-item-blurred');
					$(this).fadeTo(400, 0.5);
				}
			}
		});

		// Bold appropriate scroll indicators
		var leftOfFirst = $('ul#portfolio-gallery li:first-child').position().left;
		var rightOfLast = $('ul#portfolio-gallery li:last-child').position().left + itemWidth;
		if( leftOfFirst < leftBoundary ) {
			$('i#portfolio-scroll-backward-indicator').addClass('active');
		}
		else {
			$('i#portfolio-scroll-backward-indicator').removeClass('active');	
		}
		if( rightOfLast > rightBoundary ) {
			$('i#portfolio-scroll-forward-indicator').addClass('active');	
		}
		else {
			$('i#portfolio-scroll-forward-indicator').removeClass('active');		
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
	var scrollToSection = function(section) {
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 600);
		return false;
	};




	/*
	 * Events
	 */

	// On any page
	$('nav#header-menu ul li').click(function(e) {
		e.preventDefault();
		var section = 'section#' + $(this).children('a').attr('href').replace('/#', '');
		// If on splash page, animate to section
		if( getPage() == 'splash' ) {
			scrollToSection(section);
		}
		else {
			window.location.href = '/#' + section;
		}
	});

	// Conditional on page
	var page = getPage();
	switch( page ) {
		// Run on splash page
		case 'splash':
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
			// Follow mouse with eyes whenever mouse moves
			$(document).mousemove(function(e) {
				// placeholder for minimize
				followMouseWithEyes(e);
			});
			break;
	}

});