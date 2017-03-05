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
        var player1 = 0;
        var player2 = 0;

        if (direction == 68) {
            $("#redcar").animate({left: "+=5"}, 0);
            player1 += 1;

        }

        if (direction == 39) {
            $("#bluecar").animate({left: "+=5"}, 0);
            player2 += 1;

        }

        if ($('#redcar').offset().left >=1080 && $('#redcar').offset().left>$('#bluecar').offset().left){
          console.log("Player 1 winner");
          $("#redcar").animate({left: "-=10"}, 0);
          alert("Player1 is the winner");
        }
        if ($('#bluecar').offset().left >=1080 && $('#bluecar').offset().left>$('#redcar').offset().left){
          console.log("Player 2 winner");
          $("#bluecar").animate({left: "-=10"}, 0);
          alert("Player2 is the winner");
        }


    }
}



});
