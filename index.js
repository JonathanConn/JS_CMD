//global command list
var commandList = ["cd", "dir"];

//BST Class (struct.js)
var dir = new BinarySearchTree();

//for submit on enter
document.getElementById("term").addEventListener("keypress", submitOnEnter);


//text area setup onwindow load, called from body
function start() {
  dir.insert("C:\\");
  var root = dir.getRootNode();
  updateCurPath();

  //add initial subdirectors
  dir.insert("School\\");
  dir.insert("Projects\\");

}

//when enter key pressed in text area it submits the form
function submitOnEnter(event) {
  if (event.which === 13 && !event.shiftKey) {
    event.target.form.dispatchEvent(new Event("submit", {
      cancelable: true
    }));
    event.preventDefault();

    var command = getcommand();
    if (contains(command))
      runcommand(command);
    else
      printErr(command);
  }
}

function updateCurPath() {
  var root = dir.getRootNode();
  var newPath = dir.inorderSTR(root, "");
  document.getElementById("term").value += newPath;
}

function newLine(){
  document.getElementById("term").value += "\n"
}
//Command handler section ------------

function getcommand() {
  var command = document.getElementById("term").value;
  command = command.substring(3);

  //parsing out space if the user types "cd" no space after
  if (command.includes(" "))
    command = command.substring(0, command.indexOf(" "));

  return command;
}

//returns boolean
function contains(command) {
  for (var i = 0; i < commandList.length; i++)
    if (commandList[i] == command.toLowerCase())
      return true;

  return false;
}

function runcommand(command) {
  command = command.toLowerCase();
  if (command == commandList[0])
    runCD();
  else if (command == commandList[1])
    runDIR();
  else
    console.log("runcommand Error ")

}

function printErr(command) {
  var errMsg = "ERROR " + command + " NOT FOUND";
  document.getElementById("term").value += "\n" + errMsg;
}

//command functions ----------------------------

function runCD() {

}

function runDIR() {
  var root = dir.getRootNode();
  var string = dir.inorderSTR(root, "");
  string = string.split("\\");

  var stringArray = new Array();
  for (var i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
    if (i != string.length - 1) {
      stringArray.push(" ");
    }
  }

  newLine();
  string.forEach(function(str) {
    document.getElementById("term").value += "\t" + str;
  });
  newLine();
  updateCurPath();


}

