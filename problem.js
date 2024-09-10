function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || income < expenses) {
    return "Invalid Input";
  }
  const calculate = income - expenses;
  const Text = (calculate * 20) / 100;
  return Text;
}

const income = 50000;
const expenses = 1500;
const total = calculateTax(income, expenses);
//console.log(total);

// problem solving 2 :
function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Emai";
  }
  //const [username, domain] = email.split("@");
  const different = email.split("@");
  const username = different[0];
  const domainName = different[1];

  const notification = username + " sent you an email from " + domainName;
  return notification;
}

const email = "arfat51@62gmail.com";
//console.log(sendNotification(email));

// problem solving 3 :
function checkDigitsInName(names) {
  if (typeof names !== "string") {
    return "Invalid Input";
  }
  for (let name of names) {
    if (name >= "0" && name <= "9") {
      return true;
    }
  }
  return false;
}
const writeName = true;
//console.log(checkDigitsInName(writeName));

// problem solving 4 :

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || typeof obj.name !== "string") {
    return "Invalid Input ";
  }
  if (
    typeof obj.name === "string" &&
    obj.testScore <= 50 &&
    obj.schoolGrade <= 30 &&
    obj.isFFamily === true
  ) {
    return true;
  }
  return false;
}

const information = {
  name: "arfat",
  testScore: 10,
  schoolGrade: 25,
  isFFamily: true,
};

//console.log(calculateFinalScore(information));

// problem solving 5 :
function waitingTime(waitingTimes, serialNumber) {
  if (typeof waitingTimes !== "array" || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sum = 0;
  for (let waitingTime of waitingTimes) {
    sum = sum + waitingTime;
  }
  let average = sum / waitingTimes.length;
  let isLeft = serialNumber - waitingTimes.length - 1;
  let waitingTime = isLeft * Math.round(average);
  return waitingTime;
}

const waitingTimes = [54, 36, 89, 2, 1, 5];
const serialNumber = "tumi amar";
console.log(waitingTime(waitingTimes, serialNumber));
