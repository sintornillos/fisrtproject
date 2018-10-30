import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "src/app/moldels/employee";

declare var M: any;

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployee();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

  addEmployee(form?: NgForm) {
    if (form) {
      if (form.value._id) {
        this.employeeService.updateEmployee(form.value).subscribe(res => {
          this.resetForm(form);
          M.toast({ html: "Successfully Updated" });
          this.getEmployee();
        });
      } else {
        this.employeeService.addEmployee(form.value).subscribe(res => {
          this.resetForm(form);
          M.toast({ html: "Successfully saved" });
          this.getEmployee();
        });
      }
    }
  }

  getEmployee() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employeeService.employees = res as Employee[];
    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(res => {
      console.log(res);
      M.toast({ html: "Successfully deleted" });
      this.getEmployee();
    });
  }
}
