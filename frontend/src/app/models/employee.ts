export class Employee {

    constructor(_id='', name='', office='', salary= 0){
        this._id = _id;
        this.name = name;
        this.office = office;
        this.salary = salary;

    }

    _id: string;
    name: string;
    position: string;
    office: string;
    salary: number;
    
}
