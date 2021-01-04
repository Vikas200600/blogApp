import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  public allStudents = [
    {
      "id":1,
      "name":"A",
      "email":"A@gmail.com"
    },
    {
      "id":2,
      "name":"B",
      "email":"B@gmail.com"
    },
    {
      "id":3,
      "name":"C",
      "email":"C@gmail.com"
    }
  ];


  constructor() { }

  public getAllData():any{
    return this.allStudents;
  }

  public getData(id:any){
    let result;
    for( let d of this.allStudents){
      if(d.id == id){
        result=d;        
      }
    }
    return result;
  }
}
