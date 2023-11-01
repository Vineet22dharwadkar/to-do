function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var taskText = taskInput.value;
    taskInput.value = "";

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));
    li.addEventListener("click", function () {
        this.remove();
    });

    taskList.appendChild(li);
}
