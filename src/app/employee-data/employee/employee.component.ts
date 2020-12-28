import { Component, OnInit } from '@angular/core';
import{Employee} from '../Model/employee';
import{EmployeeService} from '../Model/employee.service';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)  {
  if(form.value.Id==0){
    form.value.Id=0;
    form.value.Phone=parseInt(form.value.Phone);
    this.empService.PostEmployee(form.value).subscribe(data=>{
      alert("Employee Added Successfully!");
      this.empService.GetEmployees();
      form.reset();
    });
  }
  else{
     form.value.Phone=parseInt(form.value.Phone);
    this.empService.PutEmployee(form.value.Id,form.value).subscribe(data=>{
      alert("Employee data Updated Successfully!");
      form.reset();
      this.empService.GetEmployees();
    });
  }
 
 
  
  }

}
