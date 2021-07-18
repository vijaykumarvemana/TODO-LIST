//SELECTORS
  const todoInput = document.querySelector('.todo-input')
  const todoButton = document.querySelector('.todo-button')
  const todoList = document.querySelector('.todo-list')

//EVENT LISTENERS

//FUNCTIONS
const addTodo = function (event){
    event.preventDefault()
    const todoDiv = document.createElement('Div')
    todoDiv.classList.add('todo')
    //console.log(todoDiv)
    const todoLi = document.createElement('li')
    const inputValue = todoInput.value
    todoLi.innerText =inputValue
    todoLi.classList.add('todo-item')
    //console.log(todoLi)
    
    todoDiv.appendChild(todoLi)
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
   
    todoList.appendChild(todoDiv)
} 
//EVENT LISTENERS

todoButton.addEventListener('click', addTodo)
