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
  // console.log(Romans[0][0]);
  romArray.forEach((romNum) => {
    //really tried not to use a for loop, but... needed to cycle through values
    //and didn't know any other way to.
    for (let i = 0; i < Romans.length; i++) {
      /**
       * What's wanted is if(romArray value matches corresponding Romans name AND
       * there's not a Item with more value than itself in Romans IN the rest of romArray
       * Then add it's value. If there is, subtract that value. )
       */
      if (romNum === Romans[i][0]) {
        console.log(`Superior of ${romNum} is ${Romans[i + 1][0]}`);
        console.log(`Next item after ${romNum} is ${Object.keys(romNum)}`);

        // console.log(Romans[i][0] + " + " + s.indexOf(i) + " + " + s.length);
        score += Romans[i][1];
      } else if (romNum === Romans[i][0] && s.indexOf(romNum) < s.indexOf(i)) {
        score -= Romans[i][1];
      }
    }
  });

  //return the score for example
  console.log(score);
  return score;
};
///tesable vall to function
romanToInt("MD");
