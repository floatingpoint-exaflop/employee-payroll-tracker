//1a. The first defined variable, addEmployeesBtn makes a reference to the #add-employees-btn element (The Add Employees button id-tagged element in the index.html file). This allows the event listener at the bottom of the js file to work.
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// create empty array capable of holding three employee properties
let employeesArray = [];

//When called by trackEmployeeData, this function collects employee data - user input to create and return an array of employee objects
const collectEmployees = function() {
  let enterFirstName = prompt("Enter first name:");
  console.log(`User has entered ${enterFirstName} as a first name.`);
  let enterLastName = prompt("Enter last name:");
  console.log(`User has entered ${enterLastName} as a last name.`);
  let enterSalary = prompt("Enter salary:")
  console.log(`User has entered ${enterSalary} as a salary.`);
  //create an object with this info in it, add obj to array
  let employeeData = {
    firstName: enterFirstName,
    lastName: enterLastName,
    salary: enterSalary
  };
  employeesArray.push(employeeData);
  // console.table(employeesArray);
  const addAnother = confirm("Do you want to add another employee?");
  if (addAnother){
    trackEmployeeData(employeeData);
  } else {
   return employeesArray;
  }
};
// Conclude collecting of employee data

// Calculate and display the average salary
const displayAverageSalary = function() {
  // Convert string salaries to numbers
  employeesArray.forEach(employee => {
  employee.salary = parseInt(employee.salary, 10); // Convert string to integer
});
  //get total sum of salaries:
  const totalPayroll = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  // Calculate the average salary
  const avgSalary = totalPayroll / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSalary.toFixed(2)}`);
}


// Select a random employee
const getRandomEmployee = function() {
  // randomize index
  const randomize = Math.floor(Math.random() * employeesArray.length)
  //randomize employee
  const randomEmployee = employeesArray[randomize];
  // const { firstName, lastName } = randomEmployee;
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  // alert(`System has picked ${randomEmployee.firstName} ${randomEmployee.lastName} as a random employee.`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/
// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  // Clear the employee table
  employeeTable.innerHTML = '';
  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    const newTableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);
    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
    newTableRow.append(salaryCell);
    employeeTable.append(newTableRow);
  }
}

//2. This is the variable function called by the button click in the UI.
const trackEmployeeData = function() {
  //2a. declares a variable 'employees' which is tied to the variable function near the top of the js file (a pre-defined function I must write)
  const employees = collectEmployees();
  //2b. logs a table into the console, containing the employees collected by the collectEmployees variable function (a pre-defined function I must write). 'employees' constant from within the trackEmployeeData scope is the argument.
  console.table(employees);
  //2c. calls the displayAverageSalary function (a pre-defined function I must write). The 'employees' constant (the collectEmployees function) from within the trackEmployeeData scope is the argument.
  displayAverageSalary(employees);
  //2d. logs a bar ASCII into the console.
  console.log('==============================');
  //2e. calls the getRandomEmployee function (a pre-defined function I must write). The 'employees' constant (the collectEmployees function) from within the trackEmployeeData scope is the argument.
  getRandomEmployee(employees);
  //2f. Sort method applied to 'employees' by 'lastname', which seems to need to be defined globally by me.
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
  //2g. Calls displayEmployees function. The 'employees' constant (the collectEmployees function) from within the trackEmployeeData scope is the argument.
  displayEmployees(employees);
}

//1. Add event listener method to 'Add Employees' button, using the button reference (to the html) variable at the top of the js file. Upon click, it calls the variable function trackEmployeeData.
addEmployeesBtn.addEventListener('click', trackEmployeeData);
