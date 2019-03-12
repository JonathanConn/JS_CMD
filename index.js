var text = ""
var curPath = "";
var comList = ["cd", "dir"];
var dir = new BinarySearchTree();

//for submit on enter
document.getElementById("term").addEventListener("keypress", submitOnEnter);

//text area setup onwindow load, called from body
function start(){
  text = "C:\\";
  document.getElementById("term").innerHTML = text;
}

//when enter key pressed in text area it submits the form
function submitOnEnter(event){
    if(event.which === 13 && !event.shiftKey){
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        checkCom();
    }
}

//edit text area after submit
function checkCom(){
  var command = document.getElementById("term").value;
  command = command.substring(3, command.indexOf(" "));

  console.log(command);

  if(contains(comList, command)) runCom(command);
  else printError(command);

  updateCurPath();

}

function runCom(command){
    console.log("running " + command + " :) ");
    console.log("var text " + text);

}

function printError(command){
  console.log("ERROR " + command + " NOT FOUND");
  newLine();
}

function updateCurPath(){

}

function newLine(){

}


function contains(array, command){
  for(var i = 0; i < comList.length; i++)
    if(comList[i] == command.toLowerCase())
      return true;
  return false;
}




















