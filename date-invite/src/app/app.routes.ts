import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrationComponent } from './components/celebration/celebration.component';
import { FinalQuestionComponent } from './components/final-question/final-question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'final-question', component: FinalQuestionComponent },
    { path: 'celebration', component: CelebrationComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }