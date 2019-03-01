var text = "";
var comList = ["cd", "dir"];

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
        // event.preventDefault(); prevents next line being created
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

}

function runCom(command){
    console.log("running " + command + " :) ");
}

function printError(command){
  console.log("ERROR " + command + " NOT FOUND");
  newLine();
}

function newLine(){

}


function contains(array, command){
  for(var i = 0; i < comList.length; i++)
    if(comList[i] == command.toLowerCase())
      return true;
  return false;
}


class Tree{

  constructor(){

  }

  Node(){
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  Tree(data){
    var node = new Node(data);
    this._root = node;
  }

}
























