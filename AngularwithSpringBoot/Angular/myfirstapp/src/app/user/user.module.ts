import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProvidefocusDirective } from './providefocus.directive';


const routes: Routes=[{
  path:'student', component:StudentComponent
},
{
  path:'employee', component:EmployeeComponent
}];


@NgModule({
  declarations: [StudentComponent, EmployeeComponent, ProvidefocusDirective],
  imports: [
    CommonModule,
    FormsModule,
    
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserModule { }
