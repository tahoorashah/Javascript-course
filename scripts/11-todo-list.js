const todoList = [];

function addTodo() { 
 const inputElement = document.querySelector('.js-todo-input');
 const name = inputElement.value;
 

 todoList.push(name);
 console.log(todoList);

 //to empty the placeholder after clicking add
 inputElement.value = ''
}
