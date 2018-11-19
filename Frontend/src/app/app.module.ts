import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PanelComponent } from "./panel/panel.component";
import { WidgetComponent } from "./widget/widget.component";
import { FormsModule } from "@angular/forms";
import { CallService } from "./call.service";
import { HttpClientModule } from "@angular/common/http";
import { RingingComponent } from './ringing/ringing.component';
import { CallComponent } from './call/call.component';
import { FinishedComponent } from './finished/finished.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SluchawkaComponent } from './sluchawka/sluchawka.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BusyComponent } from './busy/busy.component';
import { FailedComponent } from './failed/failed.component';
import { AnsweredComponent } from './answered/answered.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, PanelComponent, WidgetComponent, RingingComponent, CallComponent, FinishedComponent, SluchawkaComponent, WrapperComponent, BusyComponent, FailedComponent, AnsweredComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, NgxSpinnerModule],
  providers: [CallService],
  bootstrap: [AppComponent],
})
export class AppModule {}
