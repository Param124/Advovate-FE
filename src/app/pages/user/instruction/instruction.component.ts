import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  qid:any;
  quiz:any;
  constructor(private _router:ActivatedRoute,private _quiz:QuizService) { }

  ngOnInit(): void {
    this.qid=this._router.snapshot.paramMap.get('qid');
    this._quiz.getQuiz(this.qid).subscribe((data)=>{
     this.quiz=data;
    },
    (error)=>{
      alert("something went wrong")
    }
    )

  }

}
