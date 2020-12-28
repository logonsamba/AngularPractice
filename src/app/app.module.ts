import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeComponent } from './employee-data/employee/employee.component';
import { EmployeeListComponent } from './employee-data/employee-list/employee-list.component';
import { GitSourceComponent } from './employee-data/git-source/git-source.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    EmployeeComponent,
    EmployeeListComponent,
    GitSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
