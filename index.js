/**
 * @param {string} s
 * @return {number}
 */
//established function for excersize
var romanToInt = function (s) {
  //keep track of value
  let score = 0;
  //split input to array to use array functions
  let romArray = s.split("");

  //iterator for array values without "i"
  //using new tools
  for (const romanNum of romArray) {
    //romanNum is the value of the current input letter
    switch (romanNum) {
      //go through each case


      /**
       * if the number in fron of it has a higher value
       * it a subtraction
       */
      case "I":
        //if an I is present at the end of a string....
        if (s.endsWith("I")) {
          //ad 1
          score += 1;
        } else {
          ///otherwise, subtract 1
          score -= 1;
        }
        break;
      //rest of the values
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
  }
  //return the score for example
  console.log(score);
  return score;
};
///tesable vall to function
romanToInt("MCMXCIV");
