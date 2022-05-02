import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData={
  username:'',
  password:''
}
  constructor(private snack:MatSnackBar,private login:LoginService) { }

  ngOnInit(): void {
  }
  formSubmit()
  {
    if(this.loginData.username.trim()=='')
    {
      this.snack.open("Username is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.loginData.password.trim()=='')
    {
      this.snack.open("Password is required !!","",{
        duration:3000,
      });
      return;
    }
    this.login.generateLogin(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        //save username
        this.login.loginUser(data.username);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            if(this.login.getUserRole()=="ADMIN")
            {
window.location.href="/admin"
            }
            else if(this.login.getUserRole()=="Normal")
            {
              window.location.href="/user-dashboard"
            }
            else
            {
              this.login.logout();

            }
          }
        )
      },
      (error)=>{
        console.log("error");
        console.log(error);
        this.snack.open("Invalid credential !! Try Again",'',{
          duration:3000
        })
      }
    );

  }

}
