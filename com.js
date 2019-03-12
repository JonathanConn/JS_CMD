//global command list
var comList = ["cd", "dir"];

class Com{

  constructor(){

  }

  //edit text area after submit
  checkCom(){
    var command = document.getElementById("term").value;
    command = command.substring(3, command.indexOf(" "));

  }

  contains(array, command){
    for(var i = 0; i < comList.length; i++)
      if(comList[i] == command.toLowerCase())
        return true;
    return false;
  }

  runCom(command){
      console.log("running " + command + " :) ");
  }

  printError(command){
    console.log("ERROR " + command + " NOT FOUND");
  }
}
