import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid:any;
  questions:any=[];

  marksGot=0;
  correctAnswer=0;
  attempted=0;
  isSubmit=false;
  constructor(private loc : LocationStrategy,private _route:ActivatedRoute,private _question:QuestionService) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.paramMap.get('qid');
    
    this.preventBackButton();
    this.loadQuestion();
  }
  loadQuestion()
  {
    this._question.getQuestionOfQuizForTest(this.qid).subscribe((data)=>{
  this.questions=data;
  this.questions.forEach((element:any) => {
    element['givenAnswer']='';
  });
    },
    (error)=>{
      alert("something went wrong")
    }
    )
  }
  preventBackButton()
  {
    history.pushState(null,'',location.href);
    this.loc.onPopState(()=>{
      history.pushState(null,'',location.href);
    })
  }
  submitQuiz()
  {
    this.isSubmit=true;
    this.questions.forEach((element:any) => {
      if(element.givenAnswer==element.answer)
      {
        this.correctAnswer++;
        let marksSingle=this.questions[0].quiz.maxMarks/this.questions.length
        this.marksGot+=marksSingle;
      }
      debugger
      if(element.givenAnswer.trim()!='')
      {
        this.attempted++;
      }
    });
  }

}
