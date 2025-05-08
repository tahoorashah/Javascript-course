//1st proj---
const todoList = [];

function addTodo() { 
 const inputElement = document.querySelector('.js-todo-input');
 const name = inputElement.value;
 

 todoList.push(name);
 console.log(todoList);

 //to empty the placeholder after clicking add
 inputElement.value = ''
}


//2nd proj---
//use of for-loop 
//save the data step-- 
const todolist = ['make dinner', 'wash dishes'];
//calling function rederTodolist()
renderTodolist();

//function that renders todo each time we add it--
function renderTodolist(){

  //steps to generate HTML
//accumulator pattern
let todolistHTML = '';  

//steps inside loop called 'generating the HTML'
for (let i = 0; i < todolist.length; i++){
  const todo = todolist[i]; //variable stores string
  const html = `<p>${todo}</p>`;

  //combining all the code
  todolistHTML += html; 
} 
console.log(todolistHTML);

//prints todolist on webpage
document.querySelector('.js-todo-list')
.innerHTML = todolistHTML; 
}

function Todolist() { 
 const inputelement = document.querySelector('.js-name-input');
 const name = inputelement.value;
 

 todolist.push(name);
 console.log(todolist);

 //to empty the placeholder after clicking add
 inputelement.value = '';

 //calling function renderTodolist
 renderTodolist();
}
