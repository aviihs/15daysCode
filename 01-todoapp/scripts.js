const inputBox = document.querySelector('#input');
const listContainer = document.querySelector('#list-container');

function addTask() {
  if(inputBox.value === '') {
    alert('Please enter a task!, You must write something');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = 'x';
    li.appendChild(span);
}
inputBox.value = '';
saveData();
}

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

listContainer.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showData();