// Write your code here
var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
var arrayLength = myFarm.length;

for (var i = 0; i < arrayLength; i++) {
  var animal = myFarm[i];
  console.log(animal);

  if (
    animal.charAt(0).toLowerCase() === "c" ||
    animal.charAt(0).toLowerCase() === "o"
  ) {
    alert("Alert: An animal's name starts with 'c' or 'o'");
  }
}
