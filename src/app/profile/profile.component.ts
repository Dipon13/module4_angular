import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public userdata: any[] = [];
  public useraddress: any[] = [];
  public fname: string = '';
  public lname: string = '';
  public dob: string = '';
  public gender: string = '';
  public edu: string = '';
  public discipline: string = '';
  public contact: string = '';
  public po: string = '';
  public ps: string = '';
  public city: string = '';
  public pin: string = '';
  public state: string = '';

  constructor(private userinfo: UserDataService, private router: Router) {}

  ngOnInit(): void {
    this.userdata = this.userinfo.getuserdetails();
    this.useraddress = this.userinfo.getuseraddress();
    this.fname = this.userdata[0].firstname;
    this.lname = this.userdata[0].lastname;
    this.dob = this.userdata[0].dob;
    this.gender = this.userdata[0].gender;
    this.edu = this.userdata[0].highestedu;
    this.discipline = this.userdata[0].discipline;
    this.contact = this.userdata[0].contact;
    this.po = this.useraddress[0].post;
    this.ps = this.useraddress[0].ps;
    this.city = this.useraddress[0].city;
    this.pin = this.useraddress[0].pin;
    this.state = this.useraddress[0].state;
  }
}
