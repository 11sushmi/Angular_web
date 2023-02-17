import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor( private activatedroute: ActivatedRoute) { }

  userId="";
  

  ngOnInit(): void {
   this.userId = this.activatedroute.snapshot.params["id"];
  }

}
