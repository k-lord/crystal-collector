//collapsible button for div id="instructions" to hide instructions while playing

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//computer generated random number var = randomNumber between 19-120 & make this the content in div #randomNumber

var targetNumber = Math.floor(Math.random() * 102 + 19);
console.log("The target number is: " + targetNumber);
$("#randomNumber").text(targetNumber);

//set initial score to 0, wins to 0, and losses to 0

var score = 0;
$("#numberScore").text(score);
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#loss").text(losses);

//each jewel gets computer generated random number var jewel1, etc. between 1-12

var jewel1 = Math.floor(Math.random() * 12 + 1);
console.log("jewel 1 is: " + jewel1);

var jewel2 = Math.floor(Math.random() * 12 + 1);
console.log("jewel 2 is: " + jewel2);

var jewel3 = Math.floor(Math.random() * 12 + 1);
console.log("jewel 3 is: " + jewel3);

var jewel4 = Math.floor(Math.random() * 12 + 1);
console.log("jewel 4 is: " + jewel4);

/*each time user clicks on jewel add value of jewel to var Total
when score === targetNumber user wins, win++, and insert win tally in <span id="wins">
when score > targetNumber user loses, losses++, and insert loss tally in <span id="loss">*/

$("#jewel1").on("click", function() {
  console.log("You clicked a crystal with the value of " + jewel1);
  score = score + jewel1;
  console.log("Your new score is " + score);
  $("#numberScore").text(score);

  if (score === targetNumber) {
    wins++;
    console.log("You win! New total wins: " + wins)
    $("#wins").text(wins);
    jewel1 = 0;
    jewel2 = 0;
    jewel3 = 0;
    jewel4 = 0;
    
  };


  if (score > targetNumber) {
    losses++;
    console.log("you lose! New total losses: " + losses)
    $("#loss").text(losses);
    jewel1 = 0;
    jewel2 = 0;
    jewel3 = 0;
    jewel4 = 0;
  }
});

// Repeat above code for jewel img 2

$("#jewel2").on("click", function() {
  console.log("You clicked a crystal with the value of " + jewel2);
  score = score + jewel2;
  console.log("Your new score is " + score);
  $("#numberScore").text(score);

  if (score === targetNumber) {
    wins++;
    console.log("You win! New total wins: " + wins);
    $("#wins").text(wins);
    jewel1 = 0;
    jewel2 = 0;
    jewel3 = 0;
    jewel4 = 0;
  }

  if (score > targetNumber) {
    losses++;
    console.log("you lose! New total losses: " + losses);
    $("#loss").text(losses);
    jewel1 = 0;
    jewel2 = 0;
    jewel3 = 0;
    jewel4 = 0;
  }
});

// Repeat above code for jewel img 3

$("#jewel3").on("click", function() {
  console.log("You clicked a crystal with the value of " + jewel3);
  score = score + jewel3;
  console.log("Your new score is " + score);
  $("#numberScore").text(score);

  if (score === targetNumber) {
    wins++;
    console.log("You win! New total wins: " + wins);
    $("#wins").text(wins);
    jewel1 = 0;
    jewel2 = 0;
    jewel3 = 0;
    jewel4 = 0;
   
  }

  if (score > targetNumber) {
    losses++;
    console.log("you lose! New total losses: " + losses);
    $("#loss").text(losses);
    jewel1 = 0;
    jewel2 = 0;
    jewel3 = 0;
    jewel4 = 0;

  }

});

// Repeat above code for jewel img 4

$("#jewel4").on("click", function() {
  console.log("You clicked a crystal with the value of " + jewel4);
  score = score + jewel4;
  console.log("Your new score is " + score);
  $("#numberScore").text(score);

    if (score === targetNumber) {
      wins++;
      console.log("You win! New total wins: " + wins);
      $("#wins").text(wins);
      jewel1 = 0;
      jewel2 = 0;
      jewel3 = 0;
      jewel4 = 0;
    }
  
    if (score > targetNumber) {
      losses++;
      console.log("you lose! New total losses: " + losses);
      $("#loss").text(losses);
      jewel1 = 0;
      jewel2 = 0;
      jewel3 = 0;
      jewel4 = 0;
      
    }

});

/*Reset button: keep wins and losses tallying
targetNumber value changes, jewels values change, and Total resets to 0*/

$("#reset-button").on("click", function() {
  console.log("you clicked the reset button");

  var targetNumber = Math.floor(Math.random() * 102 + 19);
    console.log("The target number is: " + targetNumber);
    $("#randomNumber").text(targetNumber);

    score = 0;
    console.log("score is: " + score);
    $("#numberScore").text(score);

    var jewel1 = Math.floor(Math.random() * 12 + 1);
    console.log("jewel 1 is: " + jewel1);

    var jewel2 = Math.floor(Math.random() * 12 + 1);
    console.log("jewel 2 is: " + jewel2);

    var jewel3 = Math.floor(Math.random() * 12 + 1);
    console.log("jewel 3 is: " + jewel3);

    var jewel4 = Math.floor(Math.random() * 12 + 1);
    console.log("jewel 4 is: " + jewel4);


});