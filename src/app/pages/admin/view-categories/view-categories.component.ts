import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchAll } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
    {
      cid:23,
      title:"titleee",
      description:"thi is im"
    },
    {
      cid:23,
      title:"titleee",
      description:"thi is im"
    },
    {
      cid:23,
      title:"titleee",
      description:"thi is im"
    }
  ]
  constructor(private category:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
      
    },
    (error)=>{
      this.snack.open("Error in loading data",'',{
        duration:3000
      })
    }
  )};

}
