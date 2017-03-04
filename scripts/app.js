$(document).ready(function() {



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

        if (direction == 68) {
            $("#audi").animate({left: "+=5"}, 0);
        }

        if (direction == 39) {
            $("#viper").animate({left: "+=5"}, 0);
        }

    }
}
});
