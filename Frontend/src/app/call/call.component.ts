import { Component, OnInit } from '@angular/core';
import { CallService } from './../call.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  constructor(private router: Router, private callService: CallService, private spinner: NgxSpinnerService) { }
  ngOnInit() {

    this.spinner.show();

    this.callService.getCallStatus().subscribe(status => {
      if (this.callService.isFinished(status)) {
        this.router.navigate(['/panel/finished']);
      }
    });
    }
}
