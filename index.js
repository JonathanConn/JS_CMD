var text = ""

//BST Class (struct.js)
var dir = new BinarySearchTree();

//Command class (com.js)
var com = new Com();

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
        com.checkCom();

    }
}

function updateCurPath(){
  var root = dir.getRootNode();
  var newPath = dir.inorderSTR(root);
  document.getElementById("term").value += "\n"+newPath;
}

function newLine(){
  updateCurPath();
}
