function addToList(taskText) {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task_container");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check_box");
    taskContainer.appendChild(checkBox); 

    let taskData = document.createElement("div");
    taskData.textContent = taskText;
    taskData.classList.add("task");
    taskContainer.appendChild(taskData);

    /***********************************/
    checkBox.addEventListener("change", function () {
        moveCompletedTask(taskContainer);
    });

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener("click",function(){
        editTask(taskData);
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    deleteButton.addEventListener("click", function(){
        taskContainer.remove();
    })

    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);

    document.getElementById("toDo").appendChild(taskContainer);
    return;
}

function editTask(taskData) {
    let taskText = taskData.textContent;
    let inputField = document.createElement("input");
    inputField.type = "text";
    // inputField.style.border = "none";
    // inputField.style.padding = "1%";

    inputField.value = taskText;

    inputField.addEventListener("blur", function () {
        taskData.textContent = inputField.value;
    });

    taskData.textContent = "";
    taskData.appendChild(inputField);
    inputField.focus();
}

/**********************************************/
function moveCompletedTask(taskContainer) {
        let compTaskContainer = document.getElementById("compTask");
        let changeLine = taskContainer.querySelector(".task");
        changeLine.style.textDecoration = "line-through";
        compTaskContainer.appendChild(taskContainer);
    }

function addTask() {
    let taskInput = document.getElementById("add_task");
    let task = taskInput.value;
        addToList(task);
        taskInput.value = "";
    }
