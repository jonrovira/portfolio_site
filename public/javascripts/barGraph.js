$(document).ready(function() {

	/*
	 * BarGraph Object
	 */

	function BarGraph(ctx) {

		/*
		 * Private properties and methods
		 */

		// private methods
		var that = this;
		var startArr;
		var endArr;
		var looping = false;

		// Loop method adjusts the height of bar and redraws if necessary
		var loop = function() {

		};

		// Draw method updates the canvas with the current display
		var draw = function(arr) {

			// declarations, initializations
			var numOfBars = arr.length;
			var barWidth;
			var barHeight;
			var border = 2;
			var ratio;
			var maxBarHeight;
			var gradient;
			var largestValue;
			var graphAreaX = 0;
			var graphAreaY = 0;
			var graphAreaWidth = that.width;
			var graphAreaHeight = that.height;
			var i;

			// update the dimensions of the canvas only if they have changed
			if( ctx.canvas.width !== that.width || ctx.canvas.height !== that.height ) {
				ctx.canvas.width = that.width;
				ctx.canvas.height = that.height;
			}

			// draw the background color
			ctx.fillStyle = that.backgroundColor;
			ctx.fillRect(0, 0, that.width, that.height);

			// if x axis labels exist then make room
			if( that.xAxisLabelArr.length ) {
				graphAreaHeight = -=40;
			}

			// calculate dimensions of the bar
			barWidth = graphAreaWidth / numOfBars - that.margin * 2;
			maxBarHeight = graphAreaHeight - 25;

			// determine the largest value in the bar array
			var largestValue = 0;
			for( i=0; i<arr.length; i+=1 ) {
				if( arr[i] > largestValue ) {
					largestValue = arr[i];
				}
			}

			// for each bar
			for( i=0; i<arr.length; i+=1 ) {
				// set the ratio of current bar compared to the maximums
				if( that.maxValue ) {
					ratio = arr[i] / that.maxValue;
				}
				else {
					ratio = arr[i] / largestValue;
				}

				barHeight = ratio * maxBarHeight;
			}

			// turn on shadow
			ctx.shadowwOffsetX = 2;
			ctx.shadowOffsetY = 2;
			ctx.shadowBlur = 2;
			ctx.shadowColor = ""
		};


		/*
		 * Private properties and methods
		 */

		// public properties
		this.width = 300;
		this.height = 150;
		this.maxValue;
		this.margin = 5;
		this.colors = ["purple", "red", "green", "yellow"];
		this.curArr = [];
		this.backgroundColor = "#fff";
		this.xAxisLabelArr = [];
		this.yAxisLabelArr = [];
		this.animationInterval = 100;
		this.animationSteps = 10;

		// Update method sets the end bar array and starts the animation
		this.update = function(newArr) {

		};
	};

	var ctx = $('#skills-canvas')[0].getContext('2d');

	var graph = new BarGraph(ctx);
	graph.margin = 2;
	graph.width = 450;
	graph.height = 150;
	graph.xAxisLabelArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	graph.update([3, 5, 3, 4, 4, 13, 2]);




});