//get canvas and set it to 2d
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//set canvas width and height to window width and height
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
//set starting point, y needs to be wave height + wave offset
var x = 0, y = 20;
while (x < 3000) {
  ctx.moveTo(x, y);
  y = getY(x, 0.05);
  console.log("x = " +  x + "; y = " + getY(x));

  ctx.lineWidth = 1;
  ctx.lineTo(x, y);
  ctx.stroke();

  x+=1;
}
