const data = [
    {
      "id": 1,
      "name": "Alice",
      "age": 25,
      "skills": ["JavaScript", "React", "Node.js"],
      "projects": [
        {"title": "Portfolio Website", "completed": true},
        {"title": "E-commerce App", "completed": false}
      ]
    },
    {
      "id": 2,
      "name": "Bob",
      "age": 28,
      "skills": ["Python", "Django", "Machine Learning"],
      "projects": [
        {"title": "AI Chatbot", "completed": true},
        {"title": "Data Analysis Tool", "completed": true}
      ]
    },
    {
      "id": 3,
      "name": "Charlie",
      "age": 32,
      "skills": ["Java", "Spring Boot", "SQL"],
      "projects": [
        {"title": "Banking System", "completed": false},
        {"title": "Inventory Management", "completed": true}
      ]
    }
  ]
  
let data2 = [10,43,3,23];

Array(data2).map((ele) => {
    console.log(ele);
})