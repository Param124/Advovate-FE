import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  question:any;

  constructor(private _route:ActivatedRoute,private _question:QuestionService) { }

  ngOnInit(): void {

    this.qId=this._route.snapshot.paramMap.get('qId');
    this.qTitle=this._route.snapshot.paramMap.get('title');
    console.log(Number (this.qId));
     
     this._question.getQuestionOfQuiz(Number (this.qId)).subscribe((data)=>{
       this.question=data;
       console.log(this.question)
     },
     (error)=>{

     }
     )


  }
  public deleteQuestion(qId:any)
  {
     this._question.deleteQuestion(qId).subscribe((data)=>{
      alert("deleted successfull")
      window.location.reload();
     },
     
     (error)=>{
           alert("error")
     })
  }

}
