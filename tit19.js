const input=document.querySelector("#inputbox");
const listcontainer=document.querySelector("#listcontainer");
function addtask(){
    if(input.value===''){
        alert("You must add something to your list");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();