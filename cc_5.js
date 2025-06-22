console.log("Module 5: Employee Pay Calculator");
console.log("------------------------------------------------------");

// Step 2: Create an aaray of 3-5 employee objects.

let employees = [
  { name: "Dan", hourlyRate: 30, hoursWorked: 40 },
  { name: "Bob", hourlyRate: 25, hoursWorked: 35 },
  { name: "Jim", hourlyRate: 20, hoursWorked: 45 },
]

console.log("Employee Information: Name, Hourly Rate, Hours Worked");

    employees.forEach(employee => {
  console.log(`${employee.name}, $${employee.hourlyRate}, ${employee.hoursWorked} hours`);
});

// Step 3: Write a function that returns pay for up to 40 hours only.

function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

console.log("\nBase Pay Calculation:");
employees.forEach(employee => {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  console.log(`${employee.name}: $${basePay.toFixed(2)}`);
});

// Step 4: Write a that returns 1.5x rate for hours over 40, overtime.

function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * rate * 1.5;
}
  
console.log("\nOvertime Pay Calculation:");
employees.forEach(employee => {
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  console.log(`${employee.name}: $${overtimePay.toFixed(2)}`);
});

// Step 5: Write a function that deducts 15% tax.

function calculateTaxes(grossPay) {
    return grossPay * 0.85;
}

console.log("\nNet Pay Calculation:");
employees.forEach(employee => { 
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = calculateTaxes(grossPay);
  console.log(`${employee.name}: $${netPay.toFixed(2)}`);
});

// Step 6: Write a function that returns an object with: name, base pay, overtime pay, gross pay, and net pay.

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

//Step 7: Loop through your employee array and log the payroll object for each employee..

console.log("\nPayroll Summary:");
employees.forEach(employee => {
  const payroll = processPayroll(employee);
  console.log(`Payroll for ${payroll.name}: Base Pay: $${payroll.basePay}, Overtime Pay: $${payroll.overtimePay}, Gross Pay: $${payroll.grossPay}, Net Pay: $${payroll.netPay}`);
});
console.log("------------------------------------------------------");
console.log("Module 5: Employee Pay Calculator Completed Successfully!");