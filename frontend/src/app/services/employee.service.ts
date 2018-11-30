import { Injectable } from '@angular/core';

// Importo la libreria HttpClient para comunicar nuestra aplicación desde el frontend con el servidor 
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
// import { EmployeeComponent } from '../components/employees/employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  // creo una constante para almacenar la url donde va a ir ha hacer las consultas
  readonly URL_API = 'http://localhost:3000/api/employees';

  // una vez importado el modulo necesito instanciarlo
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
   }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployee(employee: Employee){
    // cuando hago el metodo post le envio un empleado
    return this.http.post(this.URL_API, employee); 
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  

}
