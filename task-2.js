var shops = 400;
var free = "coke";

if (shops >= 500) {
  //console.log(
  // `apni jehetu ${shops} takar jinish kinechen, tai amra apnake ekta ${free} ditechi`
  // );
} else {
  //console.log(
  //`apne jehetu 500 takar niche jinish kinechen, tai apnake ekta 30 taka diye coke kinte hobe....`
  //);
}

// task 2

var bmi = 10;

if (bmi <= 18.5) {
  //console.log("you are underweight.");
} else if (bmi <= 24.9) {
  //console.log("you are normal.");
} else if (bmi <= 29.5) {
  //console.log("you are overweight.");
} else {
  //console.log(" Otherwise, you are obese.");
}

// task 3
var number = 90;

if (number <= 59) {
  //console.log("f");
} else if (number <= 69) {
  //console.log("d");
} else if (number <= 79) {
  //console.log("c");
} else if (number <= 89) {
  //console.log("b");
} else if (number <= 100) {
  //console.log("a");
} else {
  //console.log("Amar mone hoy apnar konu ek jaigai vul hocche");
}

// task 4

var myMarks = 89;
var myFriendMarks = 65;

if (myMarks >= 80 && myFriendMarks >= 80) {
  //console.log("go for a lunch. ");
} else if (myMarks >= 80 && myFriendMarks >= 60) {
  //console.log("good luck next time.");
} else if (myMarks >= 80 && myFriendMarks >= 40) {
  //console.log("keep your friends message unseen.");
} else if (myMarks >= 80 && myFriendMarks <= 39) {
  //console.log("block your friend");
} else {
  //console.log("go to home and sleep and act sad");
}
// task 5
var num1 = 283;
var num2 = 30;
if (num1 >= num2) {
  var totalNumber = num1 * 2;
  //console.log(totalNumber);
} else {
  var sum = num1 + num2;
  //console.log(sum);
}

// task 6

var age = 90;
var taka = 500;

if (age <= 10) {
  //console.log("free");
} else if (age === "student") {
  var discount = (taka * 50) / 100;
  var totalTaka = taka - discount;
  //console.log(totalTaka);
} else if (age >= 60) {
  var discount = (taka * 15) / 100;
  var totalTaka = taka - discount;
  //console.log(totalTaka);
} else {
  var totalTaka = taka + 800;
  //console.log(totalTaka);
}

var friends = ["rakiv", "shakib", "miraz", "bappy"];
var otherMan = ["Saimon", "Arman", "Rakhin"];

var totalFriends = friends.concat(otherMan);
console.log(totalFriends);
