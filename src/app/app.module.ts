import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditRulesComponent } from './edit-rules/edit-rules.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainGameScreenComponent } from './main-game-screen/main-game-screen.component';
import { TeamComponent } from './team/team.component';
import { EditPaneComponent } from './edit-pane/edit-pane.component';
import { RuleFormComponent } from './rule-form/rule-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    EditRulesComponent,
    NavBarComponent,
    MainGameScreenComponent,
    TeamComponent,
    EditPaneComponent,
    RuleFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
