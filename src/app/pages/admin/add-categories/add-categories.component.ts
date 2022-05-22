import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  category={
    title:'',
    description:''
  }
  constructor(private _category:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit()
  {
    if(this.category.title.trim()==''||this.category.title==null)
    {
      this.snack.open("Title Required !!","",{
        duration:3000
      });
      return;
    }
    this._category.addCategory(this.category).subscribe((data)=>{
      this.category.description='';
      this.category.title='';
      this.snack.open("Category Successfull Added","",{
        duration:3000
      });
      window.location.href="/admin/categories"
    },
    (error)=>{
      this.snack.open("Something went wrong","",{
        duration:3000
      })
    }
    )

  }

}
