console.log("ciao");

var player1 = 20000000;
var player2 = 19000000;
var player3 = 15000000;

var sum = player1 + player2 + player3;
console.log(sum + " $");

var limit = 40000000;
var taxrate = 0.18; //18%
var excees = sum - limit;
var luxuryTax = excees * taxrate;

console.log(excees);

if (sum > limit) {
  console.log(luxuryTax + " Luxury tax");
} else {
  console.log("No luxury tax applied");
}
