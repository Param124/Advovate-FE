import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private quiz:QuizService,private _cat:CategoryService) { }

  qid!:string|null;
  quiz1:any;
  categories:any

  ngOnInit(): void {
      this.qid=this._route.snapshot.paramMap.get('qId');
      var a=Number(this.qid);
      this.quiz.getQuiz(a).subscribe((data)=>{
      this.quiz1=data;
      console.log(this.quiz1)
      },
      (error)=>{
         alert("Error in loading quiz")
      });

      this._cat.categories().subscribe((data)=>{
         this.categories=data;
      },
      (error)=>{
        alert("Error in loading quiz");
      })
  }

  public updateQuiz()
  {
      this.quiz.updateQuiz(this.quiz1).subscribe((data)=>{
alert("Updated successfull")
window.location.href="/admin/quizzes"
      },
      
      (error)=>{
        alert("something went wrong")
      })    
  }


}
