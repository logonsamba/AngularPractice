import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  SelectedEmployee: Employee = {

    Id:0,
    FirstName: '',
    LastName: '',
    Phone: null,
    Email: '',
    City: '',

  };

  apiUrl :string="https://azurewebapiforemployee.azurewebsites.net/";
  EmployeeList: Employee[];
  constructor(private http: Http) {

  }

  PostEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    var reqOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.apiUrl+'User/SaveEmployee', body, reqOptions).map(x => x.json);
  }

  PutEmployee(id: number, emp: Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    var reqOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.apiUrl+'User/UpdateEmployee/' + id, body, reqOptions).map(x => x.json);
  }

  // GetEmployees(){
  //   var headerOptions=new Headers({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
  //   var reqOptions=new RequestOptions({method:RequestMethod.Get,headers:headerOptions});
  //   return this.http.get('https://localhost:44303/User/GetEmployees',reqOptions).map((data:Response)=>{
  //     return data.json() as Employee[];
  //   }).toPromise().then(x=>{
  //     this.EmployeeList=x;
  //   });
  // }
GetGitITems(){
  var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  var reqOptions = new RequestOptions({ method: RequestMethod.Get, headers: headerOptions });
  return this.http.get(this.apiUrl+'User/GetEmployees', reqOptions).subscribe(res => {
    console.log(res);
    this.EmployeeList = res.json() as Employee[];
  }); 
}
  GetEmployees() {
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    var reqOptions = new RequestOptions({ method: RequestMethod.Get, headers: headerOptions });
    return this.http.get(this.apiUrl+'User/GetEmployees', reqOptions).subscribe(res => {
      console.log(res);
      this.EmployeeList = res.json() as Employee[];
    });
  }

  GetEmployeeById(id: number) {
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    var reqOptions = new RequestOptions({ method: RequestMethod.Get, headers: headerOptions });
    return this.http.get(this.apiUrl+'User/GetEmployeeById?id=' + id, reqOptions).map((data: Response) => {
      return data.json() as Employee;
    }).toPromise().then(x => {
      this.SelectedEmployee = x;
    });
  }
  DeleteEmployee(id: number) {
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    var reqOptions = new RequestOptions({ method: RequestMethod.Delete, headers: headerOptions });
    return this.http.delete(this.apiUrl+'User/DeleteEmployee/'+id,reqOptions).map((data: Response) => {
      return data.json();
    });
  }


}
