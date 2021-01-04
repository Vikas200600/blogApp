import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public allStudents:any;
  constructor(public httpService:HttpService) { }

  ngOnInit(): void {
  }

}
