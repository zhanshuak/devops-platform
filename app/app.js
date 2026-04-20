function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value;

    if (!value) return;

    const li = document.createElement("li");
    li.innerText = value;

    li.onclick = function () {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
