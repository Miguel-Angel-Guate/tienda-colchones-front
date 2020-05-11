import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.less"],
})
export class RegisterComponent implements OnInit {
  showSpinner;
  emailError;
  constructor(public userService: UserService, private router:Router) {}

  ngOnInit() {}
  register(form: NgForm) {
    if (form.valid) {
      this.showSpinner=true;
      this.userService.register(form.value).subscribe((res) => {
        this.showSpinner=false;
        this.emailError='';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error=>{
        console.error(error);
        if(error.error.error){
          const duplicatedEmail=JSON.stringify(error.error.error);
          this.emailError= duplicatedEmail.includes('email') ? 'El email ya se encuentra en uso':'';
        }
        this.showSpinner=false;
      });
    }
  }
}
