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
					$(this).fadeTo("fast", 1.0);
				}
			}
			else {
				if( !$(this).hasClass('portfolio-item-blurred') ) {
					$(this).addClass('portfolio-item-blurred');
					$(this).fadeTo("fast", 0.5);
				}
			}
		});
	}



	/*
	 * Initializations, global declarations
	 */

	setupPortfolio();



	/*
	 * Events
	 */

	$('section#portfolio div.section-content div#portfolio-items-wrapper').scroll(function() {
		blurPortfolioItems();
	});

});