
function square(userNumber,userCharacter="#"){
    if (!Number.isInteger(userNumber)){
      console.log("please use an integer number as your input.")
    }else{
        let squareArray = [];
        let horizontalSide = "";
        let counter=0;
        while (counter<userNumber){
          horizontalSide += userCharacter;
          counter += 1;
      
        }
        counter =0;
        while (counter<userNumber){
          squareArray.push(horizontalSide);
          counter += 1;
        }
    
        console.log(squareArray.join("\n"));
    }
}

module.exports = { square };