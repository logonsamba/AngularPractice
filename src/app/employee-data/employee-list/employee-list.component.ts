import { Component, OnInit } from '@angular/core';
import{Employee} from '../Model/employee';
import{EmployeeService} from '../Model/employee.service';
import{NgForm} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.GetEmployees();
  }

  editEmployee(emp:Employee){
    this.empService.SelectedEmployee=Object.assign({},emp);
  }
  deleteEmployee(emp:Employee){
    if(confirm("Do you want to delete this Employee")==true){
      this.empService.DeleteEmployee(emp.Id).subscribe(x=>{
        this.empService.GetEmployees();
      });
    }
  }
}
