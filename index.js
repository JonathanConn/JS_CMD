var text = "";

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
        console.log("submitted");
        nextLine();
    }
}

//edit text area after submit
function nextLine(){
  var command = document.getElementById("term").value;
  command = command.substring(3);
  console.log(command);



}


//for submit on enter
document.getElementById("term").addEventListener("keypress", submitOnEnter);
