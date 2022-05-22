import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[
    {
      cId:231,
      title:'Pro'
    }
  ]

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberIfQuestions:'',
     active:true,
     category:{
       cId:''
     }
}
  constructor(private cat:CategoryService,private snack:MatSnackBar,private quiz:QuizService) { }

  ngOnInit(): void {
    this.cat.categories().subscribe(
      (data:any)=>{
         this.categories=data;
         
         
      },
      (error)=>{
this.snack.open("Something went wrong !!","",{
  duration:300
})
      }
    )
  }
  public addQuiz()
  {
        if(this.quizData.title==''||this.quizData.title==null) 
        {
          this.snack.open("Title required !!","",{
            duration:3000
          })
          return;
        }
        this.quiz.addQuiz(this.quizData).subscribe(
          (data:any)=>{
            this.snack.open("Added Successfully !!","",{
              duration:3000
            })
            this.quizData={
              title:'',
              description:'',
              maxMarks:'',
              numberIfQuestions:'',
               active:true,
               category:{
                 cId:''
               }
          }
          window.location.href="/admin/quizzes"
          },
          (error)=>{
            this.snack.open("Something went wrong !!","",{
              duration:3000
            })
          }
        )   
  }

}
