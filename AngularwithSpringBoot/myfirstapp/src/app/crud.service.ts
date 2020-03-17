import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: String = "http://localhost:8080/demo/";

  private _refreshNeeded$ = new Subject<void>();

  getrefreshNeeded$(){

    return this._refreshNeeded$;

  }
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<any>(this.baseUrl + "/all");
  }

  public enterStudent(f: NgForm) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post('http://localhost:8080/demo/add', f, { headers, responseType: 'text' })
    .pipe(
        tap(() =>{ this._refreshNeeded$.next();})

    );
  }

  public deleteStudent(id) {

    return this.http.delete(this.baseUrl + id,{responseType: 'text'})
    .pipe(
      tap(() => { this._refreshNeeded$.next();})
    );
  }

  public updateStudent(id:number,f: NgForm){

   console.log(f);
   console.log(id);
    return this.http.put('http://localhost:8080/demo/'+id,f,{responseType: 'text'})
    .pipe(
      tap(() => { this._refreshNeeded$.next();})
    );
  }
}
