import { HelpdeskService } from './helpdesk/helpdesk.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CallsComponent } from './calls/calls.component';


@NgModule({
  declarations: [
    AppComponent,
    CallsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [HelpdeskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
