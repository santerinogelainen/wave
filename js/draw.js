//get canvas and set it to 2d
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//set canvas width and height to window width and height
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
$(window).resize(function(){
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
});
  var json;
  //get json settings
  $.get("js/json/wave_settings.json", function(data) {
    //number of waves
    var n = data.amount.y;
    //y offset (for example 50 will add 50px of empy to top)
    var yOffset = data.full_offset.y;
    //x offset
    var xOffset = data.full_offset.x;
    //create waves
    while (n > 0) {
    //set starting point
    var x = 0 + xOffset, y = 0 + yOffset;
    //length of waves
    while (x < data.amount.x) {
      //move to point
      ctx.moveTo(x,y);
      ctx.beginPath();
      //to do \/
      ctx.arc(x, y, data.circle_size, 0, 2 * Math.PI);
      console.log(data.color[2] + 2 * getY(x));
      ctx.fillStyle = "hsla(" + data.color[0] + ", " + data.color[1] + "%, " + (data.color[2] + 1.3 * getY(x, data.frequency, data.height, data.x_offset)) + "%, " + data.color[3] + ")";
      ctx.fill();
      y = getY(x, data.frequency, data.height, data.x_offset, yOffset);
      console.log("x = " +  x + "; y = " + getY(x, data.frequency, data.height, data.x_offset, yOffset));
      ctx.closePath();
      x += data.spacing.x;
      }
    yOffset += data.spacing.y;
    xOffset -= data.x_offset;
    n--;
    }
  });
