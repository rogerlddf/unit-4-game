    var wins = 0;
    var losses = 0;
    var winsText = $("#wins-text");
    var lossesText = $("#losses-text");
    var targetNumber = 0;

    var resetTn = function(){
       targetNumber = Math.floor(Math.random() * 100);
       $("#number-to-guess").text(targetNumber);
      }
          resetTn();

    var counter = 0;
    var numberOptions = [];

          var resetCrystals = function(){

  for (var i = 0; i < 4; i++) {
    numberOptions.push(Math.floor(Math.random() * 20));
    console.log(numberOptions)
  }
            }

    resetCrystals();

  for (var i = 0; i < 4; i++) {
    var Crystal = $(".crystal" + "" + [i] + "");
    Crystal.attr("data-crystalvalue", numberOptions[i]);
  }

   $(".fa-gem").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
      resetCrystals();
            resetTn();
            wins = wins + 1;
            counter = 0;
            $( winsText ).html( wins);
            $( lossesText ).html( losses );
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      resetCrystals();
      resetTn();
      losses = losses + 1;
      counter = 0;
      $( winsText ).html( wins);
      $( lossesText ).html( losses );
    }

  });

