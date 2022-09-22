let todoItemsContainer = document.getElementById("todoItemsContainer");
let addToDoButton = document.getElementById("addTodoButton");

let todoList = [
];


addToDoButton.onclick = function() {
    onAddTodo();
}

function onAddTodo() {
    let todosCount = todoList.length;
    let userInputData = document.getElementById("todoUserInput");
    let userInputDataValue = userInputData.value;
    if (userInputDataValue === "") {
        alert("Task should not be empty");
        return;
    }
    todosCount = todosCount + 1;
    let newTodo = {
        text: userInputDataValue,
        uniqueNo: todosCount
    };

    createAndAppendTodo(newTodo);
    userInputData.value = "";
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onTodoStatusChange(checkId, labelId) {
    let checkBoxElement = document.getElementById(checkId);
    let labelElement = document.getElementById(labelId);
    // if(checkBoxElement.checked===true){
    //     document.getElementById(labelId).classList.add("checked");
    // }else{
    //      document.getElementById(labelId).classList.remove("checked");
    // }

    labelElement.classList.toggle("checked");
};


function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}



function createAndAppendTodo(todoItem) {

    let checkId = "checkboxInput" + todoItem.uniqueNo;
    let labelId = "label" + todoItem.uniqueNo;
    let todoId = "todo" + todoItem.uniqueNo;


    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkId, labelId);
    };


    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkId);
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelId;
    labelElement.textContent = todoItem.text;

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };
    //Create relation between elements
    todoItemsContainer.appendChild(todoElement);
    todoElement.appendChild(inputElement);
    todoElement.appendChild(labelContainer);
    labelContainer.appendChild(labelElement);
    labelContainer.appendChild(deleteIconContainer);
    deleteIconContainer.appendChild(deleteIcon);

    // console.log(todoItemsContainer);
};