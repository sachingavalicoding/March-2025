class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Marks: ${this.marks}`;
    }
}

// Student list
let students = [];

// Function to capitalize names
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Function to display students
const printStudentsDetails = (filteredStudents = students) => {
    const tableBody = document.querySelector("#student-table");
    tableBody.innerHTML = "";

    filteredStudents.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.marks}</td>
        `;
        tableBody.appendChild(row);
    });
};

// Event listener for form submission
document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = capitalize(document.getElementById("name").value.trim());
    const age = parseInt(document.getElementById("age").value);
    const marks = parseInt(document.getElementById("marks").value);

    if (name && age > 0 && marks >= 0) {
        students.push(new Student(name, age, marks));
        printStudentsDetails();
        document.getElementById("student-form").reset();
    } else {
        alert("Please enter valid details!");
    }
});

// Event listener for filter dropdown
document.querySelector("#filter").addEventListener("change", function () {
    const filterType = this.value;
    console.log(this);
    let sortedStudents = [...students];

    if (filterType === "name") {
        sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filterType === "age") {
        sortedStudents.sort((a, b) => a.age - b.age);
    } else if (filterType === "marks") {
        sortedStudents.sort((a, b) => a.marks - b.marks);
    }

    printStudentsDetails(sortedStudents);
});

// Initial render
printStudentsDetails();
