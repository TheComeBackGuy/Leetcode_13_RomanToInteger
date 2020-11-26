
// console.log(randoNum);
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  //establish score
  let score = 0;
  ///read through string
  for (let i = 0; i < s.length; i++) {
    // situations for each character
    switch (s.charAt(i)) {
      //I needs an exception as it's value is based on where the V is
      case "I":
        if (s.search("V") >= 0) {
          console.log("index of i is: " + i);
          if (s.indexOf("V") < i) {
            console.log("index of i is: " + i);
            score -= 1;
          } else if (s.indexOf("V") > i) {
            console.log("index of i is: " + i);
            score += 1;
          }
          console.log(" A V IS PRESENT at : " + s.indexOf("V"));
          console.log();
        } else {
          score += 1;
        }
        // score += 1;
        break;
      case "V":
        score += 5;
        break;
      case "X":
        score += 10;
        break;
      case "L":
        score += 50;
        break;
      case "C":
        score += 100;
        break;
      case "D":
        score += 500;
        break;
      case "M":
        score += 1000;
        break;
      default:
        break;
    }
    console.log(score);
  }
  // const Roman = ["I", "V", "X", "L", "C", "D", "M"];
  console.log("Final Score is " + score); // const value = [1, 5, 10, 50, 100, 500, 1000];
};

romanToInt("MMMIIIIV");
/*
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/
