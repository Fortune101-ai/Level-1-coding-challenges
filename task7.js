function combine(userArray1,userArray2){
  
  if (!(Array.isArray(userArray1) && Array.isArray(userArray2))){
    console.log("Both inputs must be arrays.")
  }else{
  
      let arrayLength1 = userArray1.length;
      let arrayLength2 = userArray2.length;
  
      const combinedArray = [];
      let counter = 0;
      while (counter<Math.max(arrayLength1,arrayLength2)){
         if (counter < arrayLength1){
             combinedArray.push(userArray1[counter])
         }    
        if (counter < arrayLength2){
            combinedArray.push(userArray2[counter])
        }
        counter += 1;
      }
      return combinedArray;
  }
}

module.exports = { combine };
