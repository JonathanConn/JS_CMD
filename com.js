//global command list
var comList = ["cd", "dir"];
var dir;

class Com{

  constructor(BST){
    dir = BST;
  }

  getCom(){
    var command = document.getElementById("term").value;
    command = command.substring(3);

    //parsing out space if the user types "cd" no space after
    if(command.includes(" "))
      command = command.substring(0, command.indexOf(" "));

    return command;
  }

  //returns boolean
  contains(command){

    for(var i = 0; i < comList.length; i++)
      if(comList[i] == command.toLowerCase())
        return true;

    return false;
  }

  runCom(com){
    console.log("running " + com + " :) ");
    com = com.toLowerCase();
    if(com == comList[0])
      runCD();
    else if(com == comList[1])
      runDIR();
    else
      console.log("runCom Error ")

  }

  printErr(command){
    var errMsg = "ERROR " + command + " NOT FOUND";
    document.getElementById("term").value += "\n" + errMsg;
  }

}

function runCD(){

}

function runDIR(){
  var root = dir.getRootNode();

  var string = dir.inorderSTR(root) + "\n";

  console.log(string);
  document.getElementById("term").value += string;
}
