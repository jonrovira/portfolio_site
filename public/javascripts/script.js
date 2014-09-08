$(document).ready(function() {

	/*
	 * Functions
	 */

	// Setup the portfolio
	//   * Set width of items wrapper
	//   * Set first portfolio item as active item
	var setupPortfolio = function() {

		// Set width of portfolio items wrapper for slider to stay on one line
		var totalWidth = 0;
		$('section#portfolio div.section-content ul#portfolio-items-wrapper li').each(function() {
			totalWidth += $(this).outerWidth(true);
		});
		$('section#portfolio div.section-content ul#portfolio-items-wrapper').width(totalWidth + 29);

		// Set first portfolio item in list as active
		$('section#portfolio div.section-content ul#portfolio-items-wrapper li:first-child').addClass('active');

		// Blur items outside visible scope of portfolio list
		blurPortfolioItems();
	};
	// Blur items outside visible scope
	var blurPortfolioItems = function() {
		// Blur items outside visible scope of portfolio list
		// var leftMargin = parseFloat($('section#portfolio div.section-content').css('margin-left').replace('px', ''));
		// var visibleWidth = $('section#portfolio div.section-content').width() - leftMargin;
		// var currentPos = 0;
		var current = $('section#portfolio div.section-content ul#portfolio-items-wrapper li.active');
		current.removeClass('portfolio-item-blurred');
		current.siblings().each(function() {
			
		});
		$('section#portfolio div.section-content ul#portfolio-items-wrapper li').each(function() {
			if( $(this) )
			currentPos += $(this).outerWidth(true);
			if( currentPos > visibleWidth ) {
				$(this).addClass('portfolio-item-blurred');
			}
			else {
				$(this).removeClass('portfolio-item-blurred');
			}
		});
	}
	// Animate portfolio gallery by one element in the correct direction
	var toPortfolioItem = function(direction) {

		// Find target element based on passed direction
		var $target;
		if( direction == 'left' ) {
			$target = $('section#portfolio div.section-content ul#portfolio-items-wrapper li.active').prev();
		}
		else if( direction == 'right' ) {
			$target = $('section#portfolio div.section-content ul#portfolio-items-wrapper li.active').next();	
		}

		// Get position of new target element
		var newPosition = $target.position().left;
		$target.addClass('active');
		$target.siblings().removeClass('active');

		// Animate list to that element
		$('section#portfolio div.section-content ul#portfolio-items-wrapper').animate({
			left : - newPosition
		});

		// Blur items outside visible scope of portfolio list
		blurPortfolioItems();
	};



	/*
	 * Initializations, global declarations
	 */

	setupPortfolio();



	/*
	 * Events
	 */

	// Next button in portfolio gallery is clicked -> animate portfolio gallery to next item if possible
	$('section#portfolio div.section-content i#portfolio-prev').click(function() {
		// placeholder for minimize
		toPortfolioItem('left');
	});
	// Previous button in portfolio gallery is clicked -> animate portfolio gallery to previous item if possible
	$('section#portfolio div.section-content i#portfolio-next').click(function() {
		// placeholder for minimize
		toPortfolioItem('right');
	});

});