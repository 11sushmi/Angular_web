import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  userList: any;

  ngOnInit(): void {


    this.userService.getUserList().subscribe(res => {
      debugger;
      this.userList = res;
    });


  }

  onEditUser(user: any) {
    this.router.navigateByUrl("views/user/edituser/" + user.UserId);
  }

}
