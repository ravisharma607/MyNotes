showTask();
let addTxt = document.getElementById('addTxt');
let addBtn = document.getElementById('addBtn');
let editBtn = document.getElementById('editBtn');

addBtn.addEventListener('click', function(){
    getInput = addTxt.value;
    let webStore = localStorage.getItem('localTask');
    if(webStore == null) {
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webStore);
    }
    taskObj.push(getInput);
    localStorage.setItem('localTask', JSON.stringify(taskObj));
    addTxt.value = '';
    showTask();
})

function showTask() {
    let webStore = localStorage.getItem('localTask');
    if(webStore == null) {
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webStore);
    }
    let html = '';
    let addedTaskList = document.getElementById('notes');
    taskObj.forEach((items, index) => {
        html += `<div class="taskBox">
        <h3>Notes No -  <span id = 'count'>${index}</span>
        </h3>
        <p> ${items} </p>
        <div class="action">
         <i id='${index}' onclick='editNotes(this.id)' class="fa fa-pencil-square-o" id="editBtn"></i>
         <i id='${index}' class="fa fa-trash" onclick = 'deleteNotes(this.id)'></i>
        </div>
    </div>`;
    });
    addedTaskList.innerHTML = html;
}
// -----------------------------------------------------
// Function to delete a note
function deleteNotes(index){
    let webStore = localStorage.getItem('localTask');
    if(webStore == null) {
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webStore);
    }
    taskObj.splice(index, 1);
    localStorage.setItem('localTask', JSON.stringify(taskObj));
    showTask();
}

// Function to edit notes |Upcoming Feature|
function editNotes(index){
    alert('Sorry, Feature not available');
}

// -------------------------------------
// Searching tasks
let search = document.getElementById('searchtxt');
search.addEventListener('input', function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('taskBox');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })
})