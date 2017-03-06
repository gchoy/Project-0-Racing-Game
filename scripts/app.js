$(document).ready(function() {

//Starts and stops countdown
var countDown = function() {
    var ct = 3;
    var $elem = $(this);
    var display = function() {
       $elem.text(ct--);
       $elem.css('color', 'red');
    }
    var iv = setInterval(function() {
        display();
        if (ct === -1) {
          clearInterval(iv);
          $elem.empty();
          $elem.css('color','green');
          $elem.append("GO!");

        }
    }, 1000);
    display();
};
$("#countdown").each(countDown);

//Setting a time interval to repeat moveCar function
setInterval(moveCar, 20);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

//moveCar function moves players and has win logic
function moveCar() {

   function stopCar(){
     $("#redcar").animate({left: "-=10"}, 10000);
     $("#bluecar").animate({left: "-=10"}, 10000);
   }

    for (var direction in keys) {

        var count1 = 0;
        var count2 = 0;

        if (direction == 68) {
            $("#redcar").animate({left: "+=5"}, 0);
        }
        if (direction == 39) {
            $("#bluecar").animate({left: "+=5"}, 0);
        }

        if ($('#redcar').offset().left >1080 && $('#redcar').offset().left>$('#bluecar').offset().left){
          console.log("Player 1 winner");
          stopCar();
          //count1 += 1;
          $('#countdown').append('<p id="p1">Player 1 Wins!<p>');
          sessionStorage.setItem("winPlayer1", count1);
          var left = document.getElementById("left");
          left.text = sessionStorage.getItem("winPlayer1", count1);
          console.log(left.text);
          $('#left').append(left.text);

        } else if ($('#bluecar').offset().left >1080 && $('#bluecar').offset().left>$('#redcar').offset().left){
          console.log("Player 2 winner");
          stopCar();
          //count2 += 2;
          $('#countdown').append('<p id="p2">Player 2 Wins!<p>');
          sessionStorage.setItem("winPlayer2",count2);
        }

    }
}

//Button restarts game
$('button').click(function() {
    location.reload();
});


});
