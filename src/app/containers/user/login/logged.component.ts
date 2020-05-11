import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.less']
})
export class LoggedComponent implements OnInit {
  showSpinner:boolean;
  constructor(public userService:UserService,private router:Router) { }

  ngOnInit() {}
  login(form:NgForm){

    this.showSpinner=true;
    if(form.valid){
      this.userService.login(form.value)
      .subscribe(res=>{
        this.userService.setUser(res['user']);
        localStorage.setItem('authToken',res['token']);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      })
    }
  }
}
