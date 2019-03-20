var text = ""

//BST Class (struct.js)
var dir = new BinarySearchTree();

//Command class (com.js)
var com = new Com(dir);

//for submit on enter
document.getElementById("term").addEventListener("keypress", submitOnEnter);


//text area setup onwindow load, called from body
function start(){
  dir.insert("C:\\");

  var root = dir.getRootNode();
  console.log("first inorder-------------")
  document.getElementById("term").innerHTML += dir.inorderSTR(root);
  console.log("first inorder-------------")
//  document.getElementById("term").innerHTML +=

  //add initial subdirectors
  dir.insert("School");
  dir.insert("Projects");

  console.log("2 inorder-------------")
  dir.inorderSTR(root);
  console.log("2 inorder-------------")
}

//when enter key pressed in text area it submits the form
function submitOnEnter(event){
    if(event.which === 13 && !event.shiftKey){
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.preventDefault();

        var command = com.getCom();
        if(com.contains(command))
          com.runCom(command);
        else
          com.printErr(command);
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
