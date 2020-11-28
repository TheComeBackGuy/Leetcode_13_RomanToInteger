/**
 * @param {string} s
 * @return {number}
 */
//established function for excersize
var romanToInt = function (s) {
  if (s.length < 1 || s.length >= 15) {
    return;
  }
  let newTotal = 0;
  let intArray = [];
  //keep track of value
  // let score = 0;
  //split input to array to use array functions
  let romArray = s.split("");
  console.log(romArray);

  const romans = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ];
  // console.log(Romans[6][0].match(/M/gi));
  romArray.forEach((romNum) => {
    //make new array with nujmber values
    for (let i = 0; i < romans.length; i++) {
      if (romNum === romans[i][0]) {
        intArray.push(romans[i][1]);
        // intArray.reduce(addItUp);
        // console.log(romans[i][1]);
      }
    }
    for (let j = 0; j < intArray.length; j++) {
      if (intArray[j + 1] > intArray[j]) {
        intArray[j] *= -1;
        console.log("J is : " + intArray[j]);
        console.log(intArray[j] + 1);
      }
    }

    console.log(intArray);
    let addItUp = (total, addOn) => total + addOn;

    newTotal = intArray.reduce(addItUp);
    console.log(newTotal);
  });
  return newTotal;
};

//return the score for example
// console.log(score);
// return score;

///tesable vall to function
romanToInt("MCDL");

//MCDLXXVI
