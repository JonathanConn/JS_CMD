var text = ""
var comList = ["cd", "dir"];
var dir = new BinarySearchTree();

//for submit on enter
document.getElementById("term").addEventListener("keypress", submitOnEnter);


//text area setup onwindow load, called from body
function start(){
  dir.insert("C:\\");
  var root = dir.getRootNode();
  document.getElementById("term").innerHTML += dir.inorderSTR(root);

}

//when enter key pressed in text area it submits the form
function submitOnEnter(event){
    if(event.which === 13 && !event.shiftKey){
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.preventDefault();
        checkCom();

    }
}

//edit text area after submit
function checkCom(){
  var command = document.getElementById("term").value;
  command = command.substring(3, command.indexOf(" "));

  if(contains(comList, command)) runCom(command);
  else printError(command);

  newLine();

}

function runCom(command){
    console.log("running " + command + " :) ");
}

function printError(command){
  console.log("ERROR " + command + " NOT FOUND");
}

function updateCurPath(){
  var root = dir.getRootNode();
  var newPath = dir.inorderSTR(root);
  document.getElementById("term").value += "\n"+newPath;
}

function newLine(){
  updateCurPath();
}


function contains(array, command){
  for(var i = 0; i < comList.length; i++)
    if(comList[i] == command.toLowerCase())
      return true;
  return false;
}




















