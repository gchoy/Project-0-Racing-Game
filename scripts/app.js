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
        var winner = "";

        if (direction == 68) {
            $("#redcar").animate({left: "+=5"}, 0);
         }

        if (direction == 39) {
            $("#bluecar").animate({left: "+=5"}, 0);
         }

        if ($('#redcar').offset().left >1080 && $('#redcar').offset().left>$('#bluecar').offset().left){
          console.log("Player 1 winner");
          $("#redcar").animate({left: "-=10"}, 10000);
          $("#bluecar").animate({left: "-=10"}, 10000);
          $('body').append('<p id="p1">Player 1 Wins!<p>');

        } else if ($('#bluecar').offset().left >1080 && $('#bluecar').offset().left>$('#redcar').offset().left){
          console.log("Player 2 winner");
          $("#bluecar").animate({left: "-=10"}, 10000);
          $("#redcar").animate({left: "-=10"}, 10000);
          $('body').append('<p id="p2">Player 2 Wins!<p>');

        }



    }
}

$('button').click(function() {
    location.reload();
});


});
