import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { RingingComponent } from './ringing/ringing.component';
import { CallComponent } from './call/call.component';
import { FinishedComponent } from './finished/finished.component';
import { SluchawkaComponent } from './sluchawka/sluchawka.component';
import { PanelComponent } from './panel/panel.component';
import { AnsweredComponent } from './answered/answered.component';
import { BusyComponent } from './busy/busy.component';
import { FailedComponent } from './failed/failed.component';

const routes: Routes = [
  { path: '', component: SluchawkaComponent},
  { path: 'panel', component: PanelComponent,
  children: [
    { path: '', component: WidgetComponent},
    { path: 'ringing/:number', component: RingingComponent},
    { path: 'call', component: CallComponent},
    { path: 'finished', component: FinishedComponent},
    { path: 'noAnswer', component: AnsweredComponent},
    { path: 'busy', component: BusyComponent},
    { path: 'failed', component: FailedComponent},
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
