/* File explained:
1. There is an event listener on the Add Employees button in html/UI 
  a. (which in turn is linked to the js via the first defined variable, addEmployeesButton).
2. Clicking it triggers the trackEmployeeData, which in turn:
  a. Declares a variable 'employees' which is tied to the collectEmployees variable function near the top of the js file (which will be filled out by me).
  b. Logs a table into the console, containing the employees collected by the collectEmployees variable function, 
  c. Calls the displayAverageSalary function near the top of the js file (which will be filled out by me).
  d. Logs a bar ASCII into the console.
  e. Calls the getRandomEmployee function near the top of the js file (which will be filled out by me).
  f. Sort method applied to 'employees' by 'lastname', which seems to need to be defined globally by me.
  g. Displays the employee data.


*/
//=======================================================================

//1a. The first defined variable, addEmployeesBtn makes a reference to the #add-employees-btn element (The Add Employees button id-tagged element in the index.html file). This allows the event listener at the bottom of the js file to work.
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// create empty array capable of holding three employee properties
let employeesArray = [];

// Collect employee data:
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let enterFirstName = prompt("Enter first name:");
  console.log(`User has entered ${enterFirstName} as a first name.`);
  let enterLastName = prompt("Enter last name:");
  console.log(`User has entered ${enterLastName} as a last name.`);
  let enterSalary = prompt("Enter salary:")
  console.log(`User has entered ${enterSalary} as a salary.`);
  //create an object with this info in it, add obj to array
  let employeeData = {
    enterFirstName: firstName,
    enterLastName: lastName,
    enterSalary: salary
  };
  employeesArray.push(employeeData);
  console.log(employeesArray);
  const addAnother = confirm("Do you want to add another employee?");
  collectEmployees()
}

// rinse and repeat
// return final array

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //get each item, total their sum, and divide by number of items
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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
