export class Employee{
    constructor(id,name,salary){
        this.id=id
        this.name=name
        this.salary=salary
    }
    display(){
        console.log(`ID= ${this.id} NAME= ${this.name} SALARY= ${this.salary}`);
    }
}