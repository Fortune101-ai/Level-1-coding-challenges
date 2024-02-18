function triangle(originalUserNumber){
  
  if (!(typeof originalUserNumber === "number")){
    console.log("please enter a number as your input.");
  }else{
  
      //Get the absolute value/positive version of the users number.
      let modifiedUserNumber = Math.sqrt(originalUserNumber*originalUserNumber);
  
      let hashline = "";
      const triangleArray = [];
      let counter = 0;
      while (counter < modifiedUserNumber){
        hashline += "#";
        triangleArray.push(hashline);
        counter += 1;
      }
      if(originalUserNumber<0){
        const reverseTriangleArray = triangleArray.reverse();
        console.log(reverseTriangleArray.join("\n"));
      }
      else{
        console.log(triangleArray.join("\n"));
      }
  }
    
};
module.exports={ triangle };
