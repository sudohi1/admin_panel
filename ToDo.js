const TODO_CONTAINER = document.getElementById('ToDo');
let todos = []

let todoAdd, todoInput, todoList;

function initTodo() {
    TODO_CONTAINER.innerHTML = `
        <h2>To Do List</h2>
        <div class="TodoInput">
        <input type="text" id="todo-input"></input><input type="button" value="Add" id="todo-add"></input>
        </div>
        <ul id="todo-list"></ul>
    `
    todoList = document.getElementById('todo-list');
    todoInput = document.getElementById('todo-input');
    todoAdd = document.getElementById('todo-add');
    todoAdd.addEventListener('click', AddTodo)
}
function AddTodo() {
    let text = todoInput.value.trim();
    if(text === "") return

    todos.push({
        text:text,
        id: Date.now(),
        finished:false
    })
    console.log(...todos);
    todosRender();
}


let todosRender = () => {
    todoList.innerHTML = ''
    todos.forEach((input)=>{
        let todo = document.createElement('li');
        todo.className = "li-todo";
        todo.innerHTML =`
            <input type="checkbox"></input><p>${input.text}</p><input class="todo-del" type="button" id="${input.id}" value="del"></input>
        `
        let delBtn = todo.querySelector('.todo-del');
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deletTodo(input.id)
        })
        todoList.appendChild(todo);
        todoInput.value = '';
    })

}

let deletTodo = (id) => {
    todos = todos.filter(item => item.id != id);
    console.log(todos);
    todosRender();
}
export { initTodo };