//$(document).on("ready", function() {
  //e.preventDefault();
  //$("#audi").hide();
  //$("#audi").slideDown(1000);
  //$("#audi").hide();
  //$("#audi").show();
  //$("#audi").slideDown(3000);

  //on click
  //moveRight();
$(document).ready(function() {
    // $("#viper").animate({left: "+=500"}, 2000);
     //$("#viper").animate({left: "-=300"}, 1000);



setInterval(moveCar, 20);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function moveCar() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $("#viper").animate({left: "-=5"}, 0);
        }
        if (direction == 38) {
            $("#viper").animate({top: "-=5"}, 0);
        }
        if (direction == 39) {
            $("#viper").animate({left: "+=5"}, 0);
        }
        if (direction == 40) {
            $("#viper").animate({top: "+=5"}, 0);
        }
    }
}
});
