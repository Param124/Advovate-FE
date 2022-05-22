import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
 {
   path:'signup',
   component:SignupComponent,
   pathMatch:'full'
 },
 {
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
 },
 {
  path:'',
  component:HomeComponent,
  pathMatch:'full'
 },
 {
  path:'admin',
  component:DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:"",
      component:WelcomeComponent
    },
    {
      path:"profile",
      component:ProfileComponent
    },
    {
      path:"categories",
      component:ViewCategoriesComponent
    },
    {
      path:"add-category",
      component:AddCategoriesComponent
    },
    {
      path:"quizzes",
      component:ViewQuizzesComponent
    },
    {
      path:"add-quiz",
      component:AddQuizComponent
    },
    {
      path:"quiz/:qId",
      component:UpdateQuizComponent
    },
    {
      path:"view-questions/:qId/:title",
      component:ViewQuestionsComponent
    },
    {
      path:"add-question/:qId",
      component:AddQuestionComponent
    }
  ]
 },
 {
   path:'user-dashboard',
   component:UserDashboardComponent,
   canActivate:[NormalGuard],
   children:[
     {
       path:':catId',
       component:LoadQuizComponent
     },
     {
       path:'instruction/:qid',
       component:InstructionComponent
     }
     
   ]
 },
 {
  path:'start/:qid',
  component:StartComponent,
  canActivate:[NormalGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
