var randomloc = Math.floor(Math.random() * 5);
var location1 = randomloc ;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk =false;

var a =[];

while (isSunk == false) {

    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6 ) {
      alert("Введите значения от 0 до 6");
    }
    else {
      guesses = guesses + 1;
     
    if (guess == location1 || guess == location2 ||guess == location3){
        alert("попал");
        a.push(guess);
        hits = hits+1;
    if (hits == 3){
      isSunk=true;
      alert("Корабль потоплен");
    }

      } else{
        alert("мимо");
      }

  }
}
var stats = "You took "+guesses+" guesess to sink the battleship,"+"which means your shooting accuracy was"+(3/guesses);
alert(stats);