import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchAll } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[
   {
       qId:23,
       title:"Program",
       description:"aaaaaaaaaaaa",
       maxMarks:"50",
       numberIfQuestions:"20",
       active:"aaaaaaaaaaaaaa",
       category:{
         title:"llll"
       }
   },
   {
    qId:23,
    title:"Program",
    description:"aaaaaaaa",
    maxMarks:"50",
    numberIfQuestions:"20",
    active:"",
    category:{
      title:"llll"
    }
}
  ]
  constructor(private quiz:QuizService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.quiz.Quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data
      },
      (error)=>{
           this.snack.open("Something went wrong !!","",{
             duration:3000
           })        
      }
    )
  }
  public deleteQuiz(qId:any)
  {
    this.quiz.deleteQuiz(qId).subscribe((data:any)=>{
      this.quizzes=this.quizzes.filter((quiz)=>quiz.qId!=qId);
      this.snack.open("Deleted Successfully !!","",{
        duration:3000
      }) 
      
    },
    (error)=>{
      this.snack.open("Something went wrong !!","",{
        duration:3000
      }) 
    }
    )
  }


}
