import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private router: Router) { }

  userList = [{
    name: 'student1',
    mobile: '12345678',
    address: 'Chennai'
  },
  {
    name: 'student2',
    mobile: '87654321',
    address: 'Hyb'
  }];

  ngOnInit(): void {
  }

  onSelectStudent(student: any) {

    this.router.navigateByUrl("views/user/createuser/" + student.name);
  }

}
