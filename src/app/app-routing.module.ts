import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { EditRulesComponent } from './edit-rules/edit-rules.component';
import { MainGameScreenComponent } from './main-game-screen/main-game-screen.component';


const routes: Routes = [
  
  {path: 'main', component: MainGameScreenComponent},
  {path: 'editRules', component: EditRulesComponent}
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
