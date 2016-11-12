//gets Y value when X is defined; formula: y = height * Math.cos(frequency * x) + offset;
//    param x === number (int, float, or double), the current x position
//    param f === number (int, float, or double), frequency of waves or how close together the waves are (best results with 0 < f < 1) bigger number = closer together
//    param h === number (int, float, or double), height of waves, bigger number = more steep wave
//    param s === number (int, float, or double), shift wave to left or right
//    param o === number (int, float, or double), offset waves from top


function getY(x, f, h, s, o) {
  //default parameters
  f = (typeof f !== 'undefined') ? f : 0.2;
  h = (typeof h !== 'undefined') ? h : 10;
  o = (typeof o !== 'undefined') ? o : 10;
  s = (typeof s !== 'undefined') ? s : 0;
  //console.log(s);
  //calculate y
  calc = h * Math.cos(f * x + s) + o;
  return calc;
}

//draw wave
//  param numOfWaves === int, number of waves
//  param xOffset === int, offset from left of the canvas (kinda like margin)
//  param yOffset === int, offset from top of the canvas (kinda like margin)
//  param waveLength === int, length of the wave
//  param waveHeight === int, height of the waves
//  param circleSize === int, size of the circles
//  param frequency === int, frequency of the waves
//  param xSpacing === int, spacing between waves x axis
//  param ySpacing === int, spacing between waves y axis
//  param shiftX === int, shift circles on x axis left on every wave (wave is identical to previous)
//  param shiftWave === int, shift the whole wave
//  param color === ARRAY!!, hsla color values in order. color of the wave (0 => hue, 1 => saturation, 2 => lightness, 3 => alpha)
function draw(numOfWaves, xOffset, yOffset, waveLength, waveHeight, circleSize, frequency, xSpacing, ySpacing, shiftX, shiftWave, color) {
  //wave shift start
  var shift = 0;
  //create waves
  while (numOfWaves > 0) {
  //set starting point
  var x = 0 + xOffset, y = 0 + yOffset;
  //length of waves
  while (x < waveLength) {
    //move to point
    ctx.moveTo(x,y);
    ctx.beginPath();
    //to do \/ make arc great again (add more config possibilities)
    ctx.arc(x, y, circleSize, 0, 2 * Math.PI);
    ctx.fillStyle = "hsla(" + color[0] + ", " + color[1] + "%, " + (color[2] + 1.3 * getY(x, frequency, waveHeight, shift)) + "%, " + color[3] + ")";
    ctx.fill();
    y = getY(x, frequency, waveHeight, shift, yOffset);
    console.log("x = " +  x + "; y = " + getY(x, frequency, waveHeight, shift, yOffset));
    ctx.closePath();
    x += xSpacing;
    }
  shift += shiftWave;
  yOffset += ySpacing;
  xOffset -= shiftX;
  numOfWaves--;
  }
}
