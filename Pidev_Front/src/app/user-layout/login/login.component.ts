import { Component, OnInit } from '@angular/core';
import {adminService} from "../../user/Services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:adminService,private route:Router,private arouter:ActivatedRoute) {
    if(this.asd.LoggedIn()==true){
      this.route.navigate(['/admin/'])
    // }else{
    //   this.route.navigate(['/'])
    }
  }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
    console.log(this.url)
  }

  loginadmin(f:any){
    let data=f.value

    this.asd.login(data).subscribe((response)=>
    {
      console.log(data)
      this.dataReceived=response
      this.asd.saveDataProfil(this.dataReceived.token)
      this.route.navigate([this.url])

    },err=>this.messageAuthError="invalid email and password")

  }
}
