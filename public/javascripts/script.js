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

		blurPortfolioItems();
	};
	// Blur items outside visible scope
	var blurPortfolioItems = function() {
		
		// Get dimensions of visilble region
		var leftMargin = parseFloat($('section#portfolio div.section-content').css('margin-left').replace('px', ''));
		var visibleWidth = $('section#portfolio div.section-content').width() - leftMargin;
		var itemWidth = $('section#portfolio div.section-content div#portfolio-items-wrapper ul#portfolio-gallery li.portfolio-item a img').width();

		// Get coordinates of visible region
		var leftBoundary = $('section#portfolio div.section-content div#portfolio-items-wrapper').scrollLeft();
		var rightBoundary = leftBoundary + visibleWidth;

		// Determine which should be blurred, blur those
		$('section#portfolio div.section-content div#portfolio-items-wrapper ul#portfolio-gallery li').each(function() {
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
	}
	// Follow the mouse with eyes in about section
	var followMouseWithEyes = function(e) {

		var $eye = $('div.eye-color-1');
		var eyeTop = $eye.offset().top;
		var eyeLeft = $eye.offset().left;

		var mouseTop = e.pageY;
		var mouseLeft = e.pageX;

		// goes with normal x, y conventions
		dTop = eyeTop - mouseTop;
		dLeft = mouseLeft - eyeLeft;

		// Pixel positions for eye center
		var eyeCenter = [12, -2];

		// get requested eye position
		var eyePositionRequest = getEyePosition(dLeft, dTop);

		var eyePositionX = eyeCenter[0] + eyePositionRequest[0];
		var eyePositionY = eyeCenter[1] - eyePositionRequest[1];

		$('div.eye-color-1').css('left', eyePositionX);
		$('div.eye-color-1').css('top', eyePositionY);
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



	/*
	 * Initializations, global declarations
	 */

	setupPortfolio();



	/*
	 * Events
	 */

	$('section#portfolio div.section-content div#portfolio-items-wrapper').scroll(function() {
		// placeholder for minimize
		blurPortfolioItems();
	});
	$(document).mousemove(function(e) {
		// placeholder for minimize
		followMouseWithEyes(e);
	});

});