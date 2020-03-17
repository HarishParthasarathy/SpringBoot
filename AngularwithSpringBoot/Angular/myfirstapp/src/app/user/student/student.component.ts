import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { NgForm } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit, OnDestroy {

  alldetails: any;
  id:number;
  added: boolean = false;
  msg: string;
  router: RouteReuseStrategy;
  firstname:string;
  lastname:string;
  email:string;
  private intervalSubscription: Subscription;
  
  constructor(private crud: CrudService) { }

  ngOnInit(): void {  
    this.crud.getrefreshNeeded$().subscribe(() => { this.retrievedata(); });
    this.retrievedata();
  }

  addedmethod(){
    this.added = false;
  }

  retrievedata() {
    this.intervalSubscription=this.crud.getAll().subscribe(
      data => {
        this.alldetails = data;
        console.log(data);
      });
  }

  checkData(f: NgForm) {
    console.log(f.value);
    this.intervalSubscription=this.crud.enterStudent(f.value).subscribe(data => {
      console.log(data);
      this.msg = data;
      this.added = true;
    },
      error => {
        console.log(error);
      });
  }

  testvalues(f:NgForm){
    console.log(f.value);
}

  setData(stud){
   
    this.id=stud.id;
    this.firstname= stud.firstname;
    this.lastname= stud.lastname;
    this.email= stud.email;
}
  updateData(f:NgForm){
    console.log(f);

    this.intervalSubscription=this.crud.updateStudent(this.id,f.value).subscribe(data => {console.log(data);
    this.msg = data;
    this.added = true;})
  }

  deleteData(stud) {
     
    this.intervalSubscription= this.crud.deleteStudent(stud.id).subscribe(data => { console.log(data) });
    this.retrievedata();
    
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }
}