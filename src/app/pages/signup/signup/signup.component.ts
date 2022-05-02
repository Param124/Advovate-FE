import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  public user={
    username:'',
password:'',
firstName:'',
lastName:'',
email:'',
phone:''
  }

  formSubmit()
  {
    if(this.user.username==''||this.user.username==null)
    {
      this._snack.open("UserName is required !!",'Ok',{
        duration:2000,
        verticalPosition:'top',
        horizontalPosition:'right'

      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        this._snack.open("Successfully register!!",'Ok',{
          duration:2000,
          verticalPosition:'top',
          horizontalPosition:'right'
  
        });
       
      },
      (error)=>{
        console.log(error);
        this._snack.open("Something went wrong!!",'Ok',{
          duration:2000,
          verticalPosition:'top',
          horizontalPosition:'right'
  
        });
        //error
      }
    );
    console.log(this.user)
  }

}
