(function () {
    /* Enum reference for each color */
    var COLORS = Object.freeze({
	GOLD: 0,
	GREEN: 1,
	ORANGE: 2,
	BLUE: 3,
	count: 4
    });

    /* Initialize the canvas to the size of the screen
     * TODO The canvas is a little too big...
     */
    function initCanvas(cvs, size) {
	cvs.width = size;
	cvs.height = size;
    }

    /* I stole this :P */
    function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
	}
	return array;
    }

    /* Generates an image and draws it to the screen.
     */
    function generateImage(ctx, size, gold, green, orange, blue, bsize) {
	var pixels = Math.pow(size, 2);
	var colorSum = gold + green + orange + blue;

	var colorVals = [
	    "#FFD700", // Gold
	    "#228B22", // Green
	    "#FF5800", // Orange
	    "#0018A8"  // Blue
	];

	var colorMax = [
	    Math.floor(pixels * gold / colorSum),
	    Math.floor(pixels * green / colorSum),
	    Math.floor(pixels * orange / colorSum),
	    Math.floor(pixels * blue / colorSum)
	];

	var x = [];
	for (i = 0; i < size; i++) {
	    for (j = 0; j < size; j++) {
		x.push(i);
	    }
	}
	x = shuffle(x);

	var y = [];
	for (var i = 0; i < size; i++) {
	    for (var j = 0; j < size; j++) {
		y.push(i);
	    }
	}
	y = shuffle(y);

	for (i = 0; i < pixels; i++) {
	    color = Math.floor(Math.random() * 4);
	    while(colorMax[color] == 0) {
		color++;
	    }
	    ctx.fillStyle = colorVals[color];
	    ctx.fillRect(x[i], y[i], bsize, bsize);
	    colorMax[color]--;
	}
    }

    window.onload = function() {

	var size = 500;
	var cid = "colors";
	var canvas = document.getElementById(cid);
	initCanvas(canvas, size);

	var cw = canvas.width;
	var ch = canvas.height;
	var ctx = canvas.getContext("2d");
	generateImage(ctx, size, 11, 22, 24, 10, 2);
    };
})();
