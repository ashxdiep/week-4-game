// boolean to see if first character or opponent chosen
var characterChose = false;

//booleans to confirm that these pokemons already chosen
var gold = false;
var nine= false;
var dug = false;
var bell = false;

//keep track how many already chosen
var chosen = 0;

//making the variables for choices and opponents
var choice;
var opponent;

//lifepoints for each character
var choicehp = 100;
var opponenthp = 100;

//all pokemons start off with 10 damage if winning pokemon,
var damage1 = 10;
var damage2 = 9;

//making the pokemon objects
var g = {
  "name" : "GOLDUCK",
  "attack" : "Surf",
  "imgback" : "<img src = assets/images/golduckback.jpg>",
  "imgfront" : "<img src = assets/images/golduckfront.png>",

  fight: function(opponent){

    //if opponent is dugtrio (golduck wins)
    if (opponent === 3){
    getdamage1 = 20;

     //attack opponent and update progressbar
     opponenthp -= damage1;
     $(".pbopp").attr("aria-valuenow", opponenthp);
     $(".pbopp").attr("style", "width:" + opponenthp + "%");

     //receive opponent attack
     choicehp -= getdamage1;

     //increase damage done by 10 and update progress bar
     damage1 += 10;
     $(".pbchoice").attr("aria-valuenow", choicehp);
     $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //if opponent is vitree (vitree win)
    if (opponent === 1){
      getdamage2 = 25;

      //attack opponent and update progressbar
      opponenthp -= damage2;
      $(".pbopp").attr("aria-valuenow", opponenthp);
      $(".pbopp").attr("style", "width:" + opponenthp + "%");

      //receive opponent attack
      choicehp -= getdamage2;

      //increase damage done by 10 and update progress bar
      damage2 += 9;
      $(".pbchoice").attr("aria-valuenow", choicehp);
      $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //else opponent is ninetales (golduck wins)
    if (opponent === 2){
      getdamage1 = 20;

       //attack opponent and update progressbar
       opponenthp -= damage1;
       $(".pbopp").attr("aria-valuenow", opponenthp);
       $(".pbopp").attr("style", "width:" + opponenthp + "%");

       //receive opponent attack
       choicehp -= getdamage1;

       //increase damage done by 10 and update progress bar
       damage1 += 10;
       $(".pbchoice").attr("aria-valuenow", choicehp);
       $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }
  }
};

var v = {
  "name": "VITREEBEL",
  "attack" : "Leaf Blade",
  "imgback" : "<img src = assets/images/vitreebelback.png>",
  "imgfront" : "<img src = assets/images/vitreebelfront.png>",

  fight: function(opponent){

    //if opponent is dugtrio (vitree wins)
    if (opponent === 3){
    getdamage1 = 20;

     //attack opponent and update progressbar
     opponenthp -= damage1;
     $(".pbopp").attr("aria-valuenow", opponenthp);
     $(".pbopp").attr("style", "width:" + opponenthp + "%");

     //receive opponent attack
     choicehp -= getdamage1;

     //increase damage done by 10 and update progress bar
     damage1 += 10;
     $(".pbchoice").attr("aria-valuenow", choicehp);
     $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //if opponent is golduck (vitree win)
    if (opponent === 0){
      getdamage1 = 20;

     //attack opponent and update progressbar
     opponenthp -= damage1;
     $(".pbopp").attr("aria-valuenow", opponenthp);
     $(".pbopp").attr("style", "width:" + opponenthp + "%");

     //receive opponent attack
     choicehp -= getdamage1;

     //increase damage done by 10 and update progress bar
     damage1 += 10;
     $(".pbchoice").attr("aria-valuenow", choicehp);
     $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //else opponent is ninetales (nine wins)
    if (opponent === 2){
      getdamage2 = 25;

      //attack opponent and update progressbar
      opponenthp -= damage2;
      $(".pbopp").attr("aria-valuenow", opponenthp);
      $(".pbopp").attr("style", "width:" + opponenthp + "%");

      //receive opponent attack
      choicehp -= getdamage2;

      //increase damage done by 10 and update progress bar
      damage2 += 9;
      $(".pbchoice").attr("aria-valuenow", choicehp);
      $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }
  }
};

var n = {
  "name": "NINETALES",
  "attack" : "SolarBeam",
  "imgback" : "<img src = assets/images/ninetalesback.png>",
  "imgfront" : "<img src = assets/images/ninetalesfront.jpg>",

  fight: function(opponent){

    //if opponent is vitree (nine wins)
    if (opponent === 1){
       getdamage1 = 20;

      //attack opponent and update progressbar
      opponenthp -= damage1;
      $(".pbopp").attr("aria-valuenow", opponenthp);
      $(".pbopp").attr("style", "width:" + opponenthp + "%");

      //receive opponent attack
      choicehp -= getdamage1;

      //increase damage done by 10 and update progress bar
      damage1 += 10;
      $(".pbchoice").attr("aria-valuenow", choicehp);
      $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //if opponent is golduck (gold win)
    if (opponent === 0){
        getdamage2 = 25;

      //attack opponent and update progressbar
      opponenthp -= damage2;
      $(".pbopp").attr("aria-valuenow", opponenthp);
      $(".pbopp").attr("style", "width:" + opponenthp + "%");

      //receive opponent attack
      choicehp -= getdamage2;

      //increase damage done by 10 and update progress bar
      damage2 += 9;
      $(".pbchoice").attr("aria-valuenow", choicehp);
      $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //else opponent is dugtrio(dugtrio wins)
    if (opponent === 3){
      getdamage2 = 25;

    //attack opponent and update progressbar
    opponenthp -= damage2;
    $(".pbopp").attr("aria-valuenow", opponenthp);
    $(".pbopp").attr("style", "width:" + opponenthp + "%");

    //receive opponent attack
    choicehp -= getdamage2;

    //increase damage done by 10 and update progress bar
    damage2 += 9;
    $(".pbchoice").attr("aria-valuenow", choicehp);
    $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }
  }
};

var d = {
  "name": "DUGTRIO",
  "attack" : "Earthquake",
  "imgback" : "<img src = assets/images/dugback.jpg>",
  "imgfront" : "<img src = assets/images/dugfront.jpg>",

  fight: function(opponent){

    //if opponent is vitree (vitree wins)
    if (opponent === 1){
      getdamage2 = 25;

      //attack opponent and update progressbar
      opponenthp -= damage2;
      $(".pbopp").attr("aria-valuenow", opponenthp);
      $(".pbopp").attr("style", "width:" + opponenthp + "%");

      //receive opponent attack
      choicehp -= getdamage2;

      //increase damage done by 10 and update progress bar
      damage2 += 9;
      $(".pbchoice").attr("aria-valuenow", choicehp);
      $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //if opponent is golduck (gold win)
    if (opponent === 0){
        getdamage2 = 25;

      //attack opponent and update progressbar
      opponenthp -= damage2;
      $(".pbopp").attr("aria-valuenow", opponenthp);
      $(".pbopp").attr("style", "width:" + opponenthp + "%");

      //receive opponent attack
      choicehp -= getdamage2;

      //increase damage done by 10 and update progress bar
      damage2 += 9;
      $(".pbchoice").attr("aria-valuenow", choicehp);
      $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }

    //else opponent is ninetales (dugtrio wins)
    if (opponent === 2){
      getdamage1 = 20;

     //attack opponent and update progressbar
     opponenthp -= damage1;
     $(".pbopp").attr("aria-valuenow", opponenthp);
     $(".pbopp").attr("style", "width:" + opponenthp + "%");

     //receive opponent attack
     choicehp -= getdamage1;

     //increase damage done by 10 and update progress bar
     damage1 += 10;
     $(".pbchoice").attr("aria-valuenow", choicehp);
     $(".pbchoice").attr("style", "width:" + choicehp + "%");
    }
  }
};

//array of pokemon objects
var pokemons = [g, v, n, d];



$(document).ready(function(){

  //when golduck is clicked
  $(".golduck").on("click",function(){

    //if character not yet chosen,( boolean false) , highlight green
    if(!characterChose){
      characterChose = true;
      gold = true;
      chosen++;
      $(".golduck").css("background-color", "green");
      $(".firstfooter").html("You choose Golduck! Choose your worthy opponent.");

      choice = 0;
    }
    //else if player choice already chosen, and choice has not already been picked
    else if (characterChose && (!gold) && (chosen < 2)) {
      chosen++;
      $(".golduck").css("background-color", "red");
      $(".firstfooter").html(" You will battle against Golduck.   ");

      opponent = 0;
      //make button to start game
      var begin = $("<button>");
      begin.html("Press me when you are done preparing for battle");
      begin.attr("class", "startgame");
      $(".firstfooter").append(begin);
    }

  });

  //when vitreebel is clicked
  $(".Vitreebel").on("click",function(){

    //if character not yet chosen,( boolean false) , highlight green
    if(!characterChose){
      chosen++;
      characterChose = true;
      bell = true;
      $(".Vitreebel").css("background-color", "green");
      $(".firstfooter").html("You choose Vitreebel! Choose your worthy opponent.");

      choice = 1;
    }
    //else if player choice already chosen, and choice has not already been picked
    else if (characterChose && (!bell) && (chosen < 2)) {
      chosen++;
      $(".Vitreebel").css("background-color", "red");
      $(".firstfooter").html(" You will battle against Vitreebel.   ");

      opponent = 1;
      //make button to start game
      var begin = $("<button>");
      begin.html("Press me when you are done preparing for battle");
      begin.attr("class", "startgame");
      $(".firstfooter").append(begin);
    }

  });

  //when ninetales is clicked
  $(".ninetales").on("click",function(){

    //if character not yet chosen,( boolean false) , highlight green
    if(!characterChose){
      characterChose = true;
      chosen++;
      nine = true;
      $(".ninetales").css("background-color", "green");
      $(".firstfooter").html(" You choose Ninetales! Choose your worthy opponent.");

      choice= 2;
    }
    //else if player choice already chosen, and choice has not already been picked
    else if (characterChose && (!nine) && (chosen < 2)) {
      chosen++;
      $(".ninetales").css("background-color", "red");
      $(".firstfooter").html(" You will battle Ninetales.   ");

      opponent = 2;
      //make button to start game
      var begin = $("<button>");
      begin.html("Press me when you are done preparing for battle");
      begin.attr("class", "startgame");
      $(".firstfooter").append(begin);
    }

  });

  //when dugtrio is clicked$(".Vitreebel").on("click",function(){
  $(".dugtrio").on("click",function(){

    //if character not yet chosen,( boolean false) , highlight green
    if(!characterChose){
      characterChose = true;
      chosen++;
      dug = true;
      $(".dugtrio").css("background-color", "green");
      $(".firstfooter").html("You choose Dugtrio! Choose your worthy opponent.");

      choice = 3;
    }
    //else if player choice already chosen, and choice has not already been picked
    else if (characterChose && (!dug) && (chosen < 2)) {
      chosen++;
      $(".dugtrio").css("background-color", "red");
      $(".firstfooter").html(" You will battle Dugtrio.   ");

      opponent = 3;
      //make button to start game
      var begin = $("<button>");
      begin.html("Press me when you are done preparing for battle");
      begin.attr("class", "startgame");
      $(".firstfooter").append(begin);

    }

  });
    $(document).on("click",".startgame",function(){

      //hide the first layout
      $(".dugtrio").hide();
      $(".ninetales").hide();
      $(".golduck").hide();
      $(".Vitreebel").hide();
      $(".firstfooter").hide();

      //let the second layout show
      $(".battle").show();

      //add the names for opponent and choice
      $("h1").html(pokemons[opponent].name);
      $("h2").html(pokemons[choice].name);

      //add pics for opponent and choice
      $(".opponentpic").html(pokemons[opponent].imgfront);
      $(".choicepic").html(pokemons[choice].imgback);

      //summon pokemon
      $(".bigbox").html("Go! " + pokemons[choice].name + "!");

    });

  //when fight button is clicked
  $(document).on("click",".fight",function(){

      $(".secondfooter").attr("font-size" , "20px");
      //inform what attack the pokemon did
      $(".bigbox").html(pokemons[choice].name + " used " + pokemons[choice].attack + "! ");

      //inform what attack opponent did
      $(".bigbox").append(pokemons[opponent].name + " countered with " + pokemons[opponent].attack + "!");

      //change progress bar for player
      pokemons[choice].fight(opponent);

      //check if opponent died
      checkOppDeath(opponenthp);

      //check if you died
      checkYourDeat(choicehp);

  });

  //when run button is clicked
  $(document).on("click",".run",function(){

    $(".bigbox").html("You wuss. You don't deserve to be in my presence. Later, loser.");

    $(".opponentpic").html("<img src = assets/images/gymleader.jpg>");

    setTimeout(reload, 7000);


  });

  //when rematch requested after winning
  $(document).on("click",".ggnore",function(){

    $(".bigbox").html("Again? Don't make me laugh. Alright, go on. Choose your pokemon.");

    setTimeout(reload, 3000);


  });

  //when rematch requested after losing
  $(document).on("click",".tryagain",function(){

    $(".bigbox").html("Hey! Take it easy! You won already!");

    setTimeout(reload, 3000);


  });

  //function to check if opponent died
  function checkOppDeath(opponenthp){
    if (opponenthp < 1){

      $(".opponentpic").html("<img src = assets/images/gymleader.jpg>");

      //alert that other opponent fainted
      $(".bigbox").html("You stinker! I took it easy on you. Alright, take this. Smell ya later. ");

      //make button to start game
      var rematch = $("<button>");
      rematch.html("<p> Press for a rematch.</p>");
      rematch.attr("class", "tryagain");
      $(".bigbox").append(rematch);

      //take away options
      $(".options").hide();



    }
  }

  //function to check if your pkemon died
  function checkYourDeat(choicehp){
    if (choicehp < 1){

      //alert that other opponent fainted
      $(".bigbox").html("HAH! You're no match for me! Scram, kid. ");

      //you win! hide opponent pic
      $(".choicepic").hide();

      $(".opponentpic").html("<img src = assets/images/gymleader.jpg>");

      //make button to start game
      var sematch = $("<button>");
      sematch.html("Press for a rematch.");
      sematch.attr("class", "ggnore");
      $(".bigbox").append(sematch);

      //take away options
      $(".options").hide();
    }
  }

  //function reload
  function reload(){
    location.reload();
  }






});
