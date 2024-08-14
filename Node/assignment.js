import { Employee } from "./employee.js";
import readLine from 'readline-sync'
import fs from 'fs';
const filePath = 'employees.json';

function readEmployees() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath).toString();
        if (data.trim().length !=0) {
            return JSON.parse(data); 
        }
        return [];
    }
    return [];
}


function writeEmployees(employees) {
        const json = JSON.stringify(employees); 
        fs.writeFileSync(filePath, json);
}
let decision;
do {

    console.log("1. Insert New Employee \t 2. Display all Employees");
    let choice= readLine.question("Enter Your Choice")
    switch (choice) {
        case '1':
            let id=readLine.question("Enter id: ")
            let name= readLine.question("Enter Name: ")
            let salary=readLine.question("Enter Salary: ")
            let emp=new Employee(id,name,salary)
            const employees = readEmployees();
            employees.push(emp);
            writeEmployees(employees);
            break;

        
        case '2':
            const allEmployees = readEmployees();
            console.log("All Employees:");
            allEmployees.forEach((employee) => {
                console.log(employee);
            });
            break
        default:
            console.log("Invalid Choice");
            break;
    }
   
    decision = readLine.question("Do you want to Continue? y/n")    
} while (decision.charAt(0).toLowerCase()=="y");