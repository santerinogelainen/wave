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
    draw(
      data.amount.y,        //numOfWaves
      data.full_offset.x,   //xOffset
      data.full_offset.y,   //yOffset
      data.amount.x,        //waveLength
      data.height,          //waveHeight
      data.circle_size,     //circleSize
      data.frequency,       //frequency
      data.spacing.x,       //xSpacing
      data.spacing.y,       //ySpacing
      data.x_shift,        //shiftX
      data.wave_shift,        //shiftWave
      data.color            //color
    );
  });
