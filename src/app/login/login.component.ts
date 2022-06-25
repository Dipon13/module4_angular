import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public logindetail: any[] = [];

  constructor(private userlogindata: UserDataService, private router: Router) {}

  ngOnInit(): void {
    this.logindetail = this.userlogindata.getlogindetails();
  }

  Validate(uname: string, pswd: string) {
    if (
      uname == this.logindetail[0].username &&
      pswd == this.logindetail[0].password
    ) {
      this.router.navigate(['/profile']);
    } else {
      alert('Username or Password is incorrect !');
    }
  }
}
