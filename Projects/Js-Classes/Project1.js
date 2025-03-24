class Project {
  constructor(name, budget, deadline) {
    this.name = name;
    this.budget = budget;
    this.deadline = deadline;
    this.workers = 0;
    this.completed = false;
  }

  displayDetails() {
    console.table({
      Name: this.name,
      Budget: `$${this.budget}`,
      Deadline: this.deadline,
      Workers: this.workers,
      Status: this.completed ? "Completed" : "In Progress",
    });
  }
  updateBudget(amount) {
    this.budget += amount;
  }
  extendDeadLine(newDate){
    this.deadline = newDate;
  }
  addWorkers(count){
    this.workers += count;
  }
  removeWorkers(count){
    if(this.workers < count){
        this.workers = 0;
        console.log("Not enough workers to remove.");
        console.log(`${count} workers removed. Remaining Workers: ${this.workers}`);
    }
    else{
        this.workers -= count;
    }
  }
  markAsCompleted(){
    this.completed = true;
  }
}

class Infra extends Project {
  constructor(name, budget, deadline, firmName, siteName) {
    super(name, budget, deadline);
    this.firmName = firmName;
    this.siteName = siteName;
  }

  displayDetails() {
    super.displayDetails();
    console.table({
      "Firm Name": this.firmName,
      "Site Name": this.siteName,
    });
  }
}

// Creating an Infra Project
const infraProject = new Infra(
  "Fix Roads",
  400000,
  "12-03-25",
  "Fix Firm",
  "Deccan Site"
);
console.log(infraProject); // Logs the entire object
infraProject.displayDetails(); // Displays details in a table format

console.log(`Adding Budget`);
infraProject.updateBudget(40000);
infraProject.markAsCompleted();
infraProject.addWorkers(10);
infraProject.displayDetails();