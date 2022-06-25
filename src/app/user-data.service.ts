import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  arr: any[] = [
    {
      firstname: 'Dipon',
      lastname: 'Mukherjee',
      dob: '6-13-1996',
      gender: 'Male',
      contact: '8967610480',
      highestedu: 'Graduate',
      discipline: 'Comp Sc Hons',
    },
  ];
  arr2: any[] = [
    {
      post: 'Champahati',
      ps: 'Baruipur',
      city: 'South 24 pgs',
      pin: '743330',
      state: 'West Bengal',
    },
  ];
  constructor() {}

  getlogindetails() {
    return [{ username: 'admin', password: '123' }];
  }
  getuserdetails() {
    return this.arr;
  }
  getuseraddress() {
    return this.arr2;
  }
  change(
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
    if (val1 != '') {
      this.arr[0].firstname = val1;
    }
    if (val2 != '') {
      this.arr[0].lastname = val2;
    }
    if (val3 != '') {
      this.arr[0].dob = val3;
    }
    if (val4 != '') {
      this.arr[0].gender = val4;
    }
    if (val5 != '') {
      this.arr[0].highestedu = val5;
    }
    if (val6 != '') {
      this.arr[0].discipline = val6;
    }
    if (val7 != '') {
      this.arr[0].contact = val7;
    }
    if (val8 != '') {
      this.arr2[0].post = val8;
    }
    if (val9 != '') {
      this.arr2[0].ps = val9;
    }
    if (val10 != '') {
      this.arr2[0].city = val10;
    }
    if (val11 != '') {
      this.arr2[0].state = val11;
    }
    if (val12 != '') {
      this.arr2[0].pin = val12;
    }
  }
}
