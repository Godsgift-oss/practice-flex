const inputbx = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
   if(inputbx.value === ''){
    alert("you must write a task!");
   }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputbx.value;
    listcontainer.appendChild(li);
    let span= document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span);
   }
   inputbx.value= "";
   savedata();
}

listcontainer.addEventsListener("click", function(a){
  if(a.target.tagName === "li"){
     a.target.classlist.toggle("checked");
     savedata();
  }
  else if (a.target.tagName === "span"){
    a.target.parentElement.remove();
    savedata();
  }
}, false);
 
function savedata(){
  localStorage.setItem("data", listcontainer.innerHTML);
}
function displaytask(){
  listcontainer.innerHTML=localStorage.getItem("data");
}
displaytask();