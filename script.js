function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function addTask() {
    let input = document.getElementById("taskInput");
    if(input.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => { li.remove(); saveTasks(); };

    document.getElementById("taskList").appendChild(li);
    saveTasks();
    input.value = "";
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => tasks.push(li.textContent));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => { li.remove(); saveTasks(); };
        document.getElementById("taskList").appendChild(li);
    });
}

function changeTitle() {
    let newTitle = document.getElementById("titleEdit").value;
    document.getElementById("appTitle").textContent = "🌫️ " + newTitle;
}

loadTasks();
