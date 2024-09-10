function checkName(character) {
  if (typeof character !== "string") {
    return "Invalid";
  }
  let lastCharacter = character.slice(-1).toLowerCase();
  let result = false;
  let letters = ["a", "y", "i", "e", "o", "u", "w"];

  for (const letter of letters) {
    if (lastCharacter === letter) {
      result = true;
    }
  }
  if (result === true) {
    const output = "Good Name";
    return output;
  } else {
    const output = "Bad Name";
    return output;
  }
}

const check = checkName(500);
console.log(check);
