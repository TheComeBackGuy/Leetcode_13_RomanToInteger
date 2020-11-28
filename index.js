/**
 * @param {string} s
 * @return {number}
 */
//established function for excersize
var romanToInt = function (s) {
  if (s.length < 1 || s.length > 15) {
    return;
  }
  let newTotal = 0;
  let intArray = [];
  //keep track of value
  // let score = 0;
  //split input to array to use array functions
  let romArray = s.split("");
  console.log("romArray is : " + romArray);

  const romans = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ];

  romArray.forEach((romNum) => {
    for (let i = 0; i < romans.length; i++) {
      if (romNum === romans[i][0]) {
        intArray.push(romans[i][1]);
      }
    }
    console.log(intArray);
  });

  for (let j = 0; j < intArray.length; j++) {
    if (
      intArray[j] < intArray[j + 1] ||
      intArray[j] < intArray[j + 2] ||
      intArray[j] < intArray[j + 3]
    ) {
      intArray[j] *= -1;
      // score += romans[j][1];
    }
    // score -= r

    //item > J's value
    // intArray.includes()
    // console.log("yup")
  }
  let addItUp = (total, addOn) => total + addOn;
  newTotal = intArray.reduce(addItUp);
  // for (j=0;j<intArray.length){
  console.log(newTotal);
  return newTotal;
  // }
};

///tesable vall to function
romanToInt("MCDLXXVI");

//MCDLXXVI
