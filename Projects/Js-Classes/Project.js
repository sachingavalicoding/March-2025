class Project {
    constructor(name, budget, deadline) {
        this.name = name;
        this.budget = budget;
        this.deadline = deadline;
    }

    displayDetails() {
        console.log(`Project: ${this.name}`);
        console.log(`Budget: $${this.budget}`);
        console.log(`Deadline: ${this.deadline}`);
    }
}


class ResidentialProject extends Project {
    constructor(name, budget, deadline, units) {
        super(name, budget, deadline); // Calls parent constructor
        this.units = units; // Additional property
    }

    displayDetails() {
        super.displayDetails(); // Calls parent method
        console.log(`Units: ${this.units}`);
    }
}

class CommercialProject extends Project {
    constructor(name, budget, deadline, officeSpaces) {
        super(name, budget, deadline);
        this.officeSpaces = officeSpaces;
    }

    calculateRevenue(perOfficeRent) {
        return this.officeSpaces * perOfficeRent;
    }
}

// Creating a Residential Project
const resProject = new ResidentialProject("Green Homes", 500000, "2025-12-31", 50);
resProject.displayDetails();

// Creating a Commercial Project
const comProject = new CommercialProject("Sky Towers", 1000000, "2026-06-30", 20);
comProject.displayDetails();
console.log(`Estimated Revenue: $${comProject.calculateRevenue(5000)}`);
