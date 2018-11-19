import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-answered',
  templateUrl: './answered.component.html',
  styleUrls: ['./answered.component.css']
})
export class AnsweredComponent implements OnInit {

  constructor(private router: Router) { }

  powrot() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
