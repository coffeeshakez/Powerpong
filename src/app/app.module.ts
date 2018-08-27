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
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatService } from './chat-service.service';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const config: SocketIoConfig = { url:'http://localhost:5000', options: {}};



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
    WelcomeScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    FormsModule,
    NgbModule,
    

  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
