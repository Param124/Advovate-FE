import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId:any;
  
  question={
    quiz:{
     qId:0
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''

  }
  constructor(private _route:ActivatedRoute,private _question:QuestionService) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.paramMap.get('qId');
    this.question.quiz['qId']=Number(this.qId);
  }

   formSubmit()
   {
     if(this.question.content.trim()==''||this.question.content.trim()==null)
     {
       alert("question is required");
       return;
     }
  this._question.addQuestion(this.question).subscribe((data)=>{
    alert("added successfully");
    window.location.href="/admin/quizzes"
  },
  (error)=>{
    alert("something went wrong")
  }
  )

   }


}
