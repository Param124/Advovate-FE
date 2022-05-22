import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId:any;
  quizzes:any;
  constructor(private _route:ActivatedRoute,private _quiz:QuizService) { }

  ngOnInit(): void {
    
    this._route.params.subscribe((params)=>{
      this.catId=this._route.snapshot.paramMap.get('catId');
      if(this.catId==0)
      {
     this._quiz.Quizzes().subscribe((data:any)=>{
  this.quizzes=data;
     },
     (error)=>{
       alert("something went wrong")
     }
     )
      }
      else
      {
        this.quizzes=[]
        this._quiz.getQuizzzesOfCategory(this.catId).subscribe((data)=>{
         this.quizzes=data;
        },
        
        (error)=>{
alert("something went wrong")
        })
      }
    })
 

  }

}
