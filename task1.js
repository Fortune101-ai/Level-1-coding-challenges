
function multiples(userNumber){

   if (!Number.isInteger(userNumber)){
     console.log("Type Error:Please enter an integer");
   }else{
   
  const naturalNumbers = [];
  for (let i=1;i<userNumber;i++){
      naturalNumbers.push(i);
  }
  
  const multiplesList = [];
  let isMultipleOfThree = false;
  let isMultipleOfFive = false;
  for (let i=0;i<naturalNumbers.length;i++){
      isMultipleOfThree = (naturalNumbers[i]%3 == 0);
      isMultipleOfFive = (naturalNumbers[i]%5 == 0);
      
      if (isMultipleOfThree || isMultipleOfFive){
          multiplesList.push(naturalNumbers[i])
      }
    
  }
  
  let sum = 0;
  for (let i=0;i<multiplesList.length;i++){
     sum += multiplesList[i];
  }
  console.log(sum);
     
   }
  
};

module.exports={ multiples };