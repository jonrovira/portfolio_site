var ctx = document.getElementById('skills-canvas').getContext('2d');

var graph = new BarGraph(ctx);
graph.margin = 2;
graph.width = 450;
graph.height = 150;
graph.xAxisLabelArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
graph.update([3, 5, 3, 4, 4, 13, 2]);