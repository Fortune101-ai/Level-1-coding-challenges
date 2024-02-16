function longest(userArray){
  if (!Array.isArray(userArray)){
    console.log("Input must be an array.")
  }else{
      let currentMaxLength = 0;
      const longestWordsList = [];
      for (let i=0;i<userArray.length;i++){
          if (userArray[i].length > currentMaxLength){
          currentMaxLength = userArray[i].length;
      }
  }
  
      for (let i=0;i<userArray.length;i++){
        if (userArray[i].length == currentMaxLength){
        longestWordsList.push(userArray[i]);
        }
      }
  
      let longestWords = longestWordsList.join("\n");
      console.log(longestWords);
  }
}
module.exports = { longest };
