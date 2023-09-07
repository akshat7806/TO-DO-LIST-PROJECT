const button = document.getElementById('button');
const listContainer = document.getElementById('list-container');
const input = document.getElementById('input');

button.addEventListener('click',()=>{
    if(input.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        input.value = ""
        saveData();
    }
});

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}
function show() {
    listContainer.innerHTML = localStorage.getItem("data");
}
show();