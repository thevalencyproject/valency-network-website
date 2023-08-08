var addPixel = function(color, startPos) {
    $('.backdrop').prepend(
      "<div class='pixel' "+
      "style='background-color: rgba("+
      color[0]+", "+
      color[1]+", "+
      color[2]+", "+
      "0.65); "+
      "top: "+startPos[1]+"px; "+
      "left: "+startPos[0]+"px;"+
      "box-shadow: 0px 0px 7px 7px rgba("+
      (color[0] - 5)+", "+
      (color[1] - 5)+", "+
      (color[2] - 5)+", "+
      "0.55); "+
      "'></div>"
    );
},


randNum = function(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  );
},


fireflyEffect = function() {
  var flying = setInterval(function(){
    var angle = randNum(0, 361),
        dist = randNum(100, 450),
        wWidth = $(window).width(),
        wHeight = $(window).height(),
        toX = Math.cos(angle * Math.PI / 180) * dist,
        toY = Math.sin(angle * Math.PI / 180) * (dist/1.5),
        color = [
          randNum(40, 80),
          randNum(100, 140),
          randNum(120, 160)
        ],
    
        startPos = [
          randNum(0, wWidth),
          randNum(0, wHeight)
        ];

    addPixel(color, startPos);

    $('.pixel:first').show(750).velocity({
      'left': '+=' + toX + 'px',
      'top': '+=' + toY + 'px'
    }, 6000, function() {
      $(this).hide(1000, function() {
        $(this).remove()
      });
    })
  }, 100);
};

fireflyEffect();   // Run the Firefly Background