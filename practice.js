//! isPangram

function isPangram(stringToCheck) {
  let strArr = stringToCheck.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let index = 0; index < alphabet.length; index++) {
    const element = alphabet[index];
    if (strArr.indexOf(element) < 0) {
      return false;
    }
  }
  return true;
}

const test1 = "The quick brown fox jumps over the lazy dog.";
const test2 = "This is not a pangram.";

let res1 = isPangram(test1);
console.log(res1);
let res2 = isPangram(test2);
console.log(res2);
