import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.css']
})
export class BusyComponent implements OnInit {

  constructor(private router: Router) { }

  powrot() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
