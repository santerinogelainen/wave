//gets Y value when X is defined; formula: y = height * Math.cos(frequency * x) + offset;
//    param x === number (int, float, or double), the current x position
//    param f === number (int, float, or double), frequency of waves or how close together the waves are (best results with 0 < f < 1) bigger number = closer together
//    param h === number (int, float, or double), height of waves, bigger number = more steep wave
//    param o === number (int, float, or double), offset waves from top


function getY(x, f, h, s, o) {
  //default parameters
  f = (typeof f !== 'undefined') ? f : 0.2;
  h = (typeof h !== 'undefined') ? h : 10;
  o = (typeof o !== 'undefined') ? o : 10;
  s = (typeof s !== 'undefined') ? s : 0;
  //calculate y
  calc = h * Math.cos(f * x + s) + o;
  return calc;
}
