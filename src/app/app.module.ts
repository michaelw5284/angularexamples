import { HelpdeskService } from './helpdesk/helpdesk.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CallsComponent } from './calls/calls.component';
import { SummaryPipe } from "./summary.pipe";
import { FavoriteComponent } from './favorite/favorite.component';
import { App } from './app.journals/app.journals.component';


@NgModule({
  declarations: [
    AppComponent,
    CallsComponent,
    SummaryPipe,
    FavoriteComponent,
    App.JournalsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [HelpdeskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
