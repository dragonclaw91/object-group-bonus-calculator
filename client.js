const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);


function findEmpolyee(employee) {
  for (let i = 0; i < employee.length; i++)
    console.log(employee[i]);
}
console.log(findEmpolyee(employees));

function findBonus(employee) {
  let bonus = 0
  // if(employeeBonus[i].reviewRating >= 2) continue;
  //console.log(employee.reviewRating)
  if (employee.reviewRating === 3) {
    bonus += employee.annualSalary * .04;
    //console.log(employee.annualSalary)
  }
  if (employee.reviewRating === 4) {
    bonus += employee.annualSalary * .06;
  }
  if(employee.reviewRating === 5){
    bonus += employee.annualSalary * .1;
  }
  if(employee.employeeNumber.length === 4){
    bonus += employee.aannualSalary * .05;
  }
  return {
    // keys
    name: employee.name,
    totalCompenstion: parseInt(employee.annualSalary) + bonus,
    bonusPecentage: 'na',
    totalBounus: bonus
  }
};

for (let i = 0; i < employees.length; i++) {
  console.log('calculating bonus for', employees[i].name)
  console.log(findBonus(employees[i]));
}
