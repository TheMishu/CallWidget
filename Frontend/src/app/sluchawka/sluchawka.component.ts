import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation} from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-sluchawka',
  templateUrl: './sluchawka.component.html',
  styleUrls: ['./sluchawka.component.css'],
  animations: [
    trigger('bounce', [transition('* => *',
      useAnimation(bounce))
    ]),
  ],
})
export class SluchawkaComponent implements OnInit {
  bounce: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  click() {
    this.router.navigate(['/panel']);
  }

  }

