function hasThree(userNumber1,userNumber2){
  
  if (!((Number.isInteger(userNumber1) && Number.isInteger(userNumber2)) && userNumber1 >= 0 && userNumber2>=0)){
    console.log("please enter two positive integers");
  }else{
      let sum = userNumber1 + userNumber2;
      let sumString = ""+sum;
  
      const sumArray = sumString.split("");
      let sumHasThree = sumArray.includes("3");
  
      let containsThree = (userNumber1==3 || userNumber2==3) && (sumHasThree);
      
      return containsThree;
    
  }
  
 
};
module.exports = { hasThree };
