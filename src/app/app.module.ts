import { HelpdeskService } from './helpdesk/helpdesk.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallsComponent } from './calls/calls.component';


@NgModule({
  declarations: [
    AppComponent,
    CallsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelpdeskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
