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

    /* Generates an image and draws it to the screen.
     */
    function generateImage(ctx, size, gold, green, orange, blue, bsize) {
	var pixels = Math.pow(size, 2);
	var colorSum = gold + green + orange + blue;

	var colorVals = [
	    "#FFFF00",
	    "#00FF00",
	    "#FF8800",
	    "#0000FF"
	];

	/* Hardcoding some magic values here... */
	var colorMax = [
	    Math.floor(pixels * gold / colorSum),
	    Math.floor(pixels * green / colorSum),
	    Math.floor(pixels * orange / colorSum),
	    Math.floor(pixels * blue / colorSum)
	];

	for (i = 0; i < size / bsize; i += bsize) {
	    for (j = 0; j < size / bsize; j += bsize) {
		var sample = Math.floor(Math.random() * COLORS.count);
		while (colorMax[sample] == 0)
		    sample++;

		ctx.fillStyle = colorVals[sample]
		ctx.fillRect(j, i, bsize, bsize);
		colorMax[sample]--;
		sample = Math.floor(Math.random() * COLORS.count);
	    }
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
	generateImage(ctx, size, 11, 22, 24, 10, 1);
    };
})();
