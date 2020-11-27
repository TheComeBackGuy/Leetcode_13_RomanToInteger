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
  console.log(romArray);

  const Romans = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
    []
  ];
  // console.log(Romans[6][0].match(/M/gi));
  romArray.forEach((romNum) => {
    //really tried not to use a for loop, but... needed to
    //incrementally cycle through values and didn't see any other way to.
    for (let i = 0; i < Romans.length; i++) {
      if (
        //if current string value === a value in Romans array
        romNum === Romans[i][0] &&
        // AND there are no instances of the next largest value
        //from the starting point of the current romArray index
        romArray.indexOf(Romans[i + 1][0], romArray.indexOf(romArray)) === -1
      ) {
        //score is increased by the value of that item
        score += Romans[i][1];
      } else if (
        //if current string value === a value in Romans array
        romNum === Romans[i][0] &&
        //AND if an instance of the next largest value is found
        romArray.indexOf(Romans[i + 1][0], romArray.indexOf(romArray)) !== -1
      ) {
        // score is decreased by the value of that item
        score -= Romans[i][1];
      }
    }
  });

  //return the score for example
  console.log(score);
  return score;
};
///tesable vall to function
romanToInt("MCM");
