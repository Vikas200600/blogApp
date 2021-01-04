import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { DemoService } from '../demo.service'

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public data:any;
  
  constructor(private _route:ActivatedRoute,private router:Router,public demoService : DemoService) { }

  ngOnInit(): void {
    let id=this._route.snapshot.paramMap.get("id");
    this.data = this.demoService.getData(id);
  } 

}
