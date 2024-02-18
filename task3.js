function isSixtyFive(userNumber1,userNumber2){
  if ((typeof userNumber1 !== "number") || (typeof userNumber2 !=="number")){
    console.log("inputs should be numbers")
  }else{
      let sum = userNumber1 + userNumber2;
      let isSixtyFive = (userNumber1==65 || userNumber2==65) || (sum==65);
      return isSixtyFive;
    }
}

module.exports ={ isSixtyFive };
