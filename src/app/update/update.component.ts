import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  fstname: string = '';
  lstname: string = '';
  dob: string = '';
  gen: string = '';
  mobile: string = '';
  stream: string = '';
  edu: string = '';
  pstation: string = '';
  post: string = '';
  city: string = '';
  state: string = '';
  pincode: string = '';
  genders: string[] = ['Male', 'Female', 'Others'];
  public userdata: any[] = [];
  public useraddress: any[] = [];

  constructor(private userinfo: UserDataService, private router: Router) {}

  ngOnInit(): void {
    this.userdata = this.userinfo.getuserdetails();
    this.useraddress = this.userinfo.getuseraddress();
    this.fstname = this.userdata[0].firstname;
    this.lstname = this.userdata[0].lastname;
    this.dob = this.userdata[0].dob;
    this.stream = this.userdata[0].discipline;
    this.mobile = this.userdata[0].contact;
    this.post = this.useraddress[0].post;
    this.pstation = this.useraddress[0].ps;
    this.city = this.useraddress[0].city;
    this.state = this.useraddress[0].state;
    this.pincode = this.useraddress[0].pin;
  }
  validate(
    val1: string,
    val2: string,
    val3: string,
    val4: string,
    val5: string,
    val6: string,
    val7: string,
    val8: string,
    val9: string,
    val10: string,
    val11: string,
    val12: string
  ) {
    this.userinfo.change(
      val1,
      val2,
      val3,
      val4,
      val5,
      val6,
      val7,
      val8,
      val9,
      val10,
      val11,
      val12
    );
    alert('Your Credential is saved.');
  }
}
