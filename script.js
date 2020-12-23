// Selectors
const input = document.querySelector('#todo-input');
const submitBtn = document.querySelector('#submit-btn');
const todoList = document.querySelector('#list');

function checkInput () {
    // Storing input length
    let inputLength = input.value.length;
    
    // Conditional - if inputLength is greater than 0, add a task
    if (inputLength > 0) {
        addTask();
    } else {
        alert('Please enter a task');
    }
};

function addTask () {
    // Create li
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    
    // Create delete btn
    let delBtn = document.createElement('input');
    delBtn.setAttribute('type', 'submit');
    delBtn.value = 'X';
    
    // Appending delete btn to li
    li.appendChild(delBtn);
    
    // Appending a complete list item to UL
    todoList.appendChild(li);
    
    // Returning input field to an empty string
    input.value ='';
    
    // Creating remove list item function
    let removeLi = function () {
        li.remove();
    };
    
    // Applying .completed class to li
    let completed = function () {
        li.classList.toggle('completed');
    };
    
    // Event listener - click on delete btn to remove task
    delBtn.addEventListener('click', removeLi);
    // Event listener - click on li to apply .completed
    li.addEventListener('click', completed);
};

// Initial Event listener
submitBtn.addEventListener('click', checkInput);


