class Project {
    constructor(name, budget, deadline) {
        this.name = name;
        this.budget = budget;
        this.deadline = deadline;
        this.completed = false;
    }

    updateBudget(amount) {
        this.budget += amount;
    }

    extendDeadline(newDate) {
        this.deadline = newDate;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

const projects = [];

document.getElementById("projectForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const budget = parseFloat(document.getElementById("budget").value);
    const deadline = document.getElementById("deadline").value;

    const newProject = new Project(name, budget, deadline);
    projects.push(newProject);
    
    document.getElementById("projectForm").reset();
    displayProjects();
});

function displayProjects() {
    const tableBody = document.getElementById("projectList");
    tableBody.innerHTML = "";

    projects.forEach((project, index) => {
        const row = `<tr>
            <td>${project.name}</td>
            <td>$${project.budget}</td>
            <td>${project.deadline}</td>
            <td>${project.completed ? "Completed" : "In Progress"}</td>
            <td>
                <button onclick="updateBudget(${index})">+ Budget</button>
                <button onclick="extendDeadline(${index})">Extend</button>
                <button onclick="markCompleted(${index})">Complete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function updateBudget(index) {
    const amount = parseFloat(prompt("Enter amount to add:"));
    if (!isNaN(amount)) {
        projects[index].updateBudget(amount);
        displayProjects();
    }
}

function extendDeadline(index) {
    const newDate = prompt("Enter new deadline (YYYY-MM-DD):");
    if (newDate) {
        projects[index].extendDeadline(newDate);
        displayProjects();
    }
}

function markCompleted(index) {
    projects[index].markAsCompleted();
    displayProjects();
}
