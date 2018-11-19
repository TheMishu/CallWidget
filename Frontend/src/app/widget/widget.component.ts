import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { trigger, transition, useAnimation} from '@angular/animations';
import { pulse } from 'ng-animate';
import { standardizeConfig } from '@angular/router/src/config';

@Component({
 selector: 'app-widget',
 templateUrl: './widget.component.html',
 styleUrls: ['./widget.component.css'],
 animations: [
  trigger('pulse', [transition('* => *',
    useAnimation(pulse, {
      params: {timing: 0.44, delay: 1}
    }))
  ]),

],
})

export class WidgetComponent implements OnInit {
 validator = /(^[0-9]{9}$)/;
 pulse: any;
 interval: any;

 private rxNumber = new Subject<string>();
 number: string;
 textNumber: string;

constructor(private router: Router) {}
 ngOnInit() {
 this.getRxNumber().subscribe(number => {
 this.textNumber = number;
 });
 }

 call() {
 if (this.isValidNumber()) {
 this.rxNumber.next(this.number);
 this.router.navigate(['/panel/ringing/' + this.number]);
 } else {
 console.info('Numer niepoprawny');
 }

 }
 isValidNumber() {
 return this.validator.test(this.number);
 }

 getRxNumber(): Observable<string> {
 return this.rxNumber.asObservable()
 }
}
