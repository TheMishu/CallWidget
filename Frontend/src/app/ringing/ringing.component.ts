import { Component, OnInit } from '@angular/core';
import { CallService } from './../call.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ringing',
  templateUrl: './ringing.component.html',
  styleUrls: ['./ringing.component.css']
})
export class RingingComponent implements OnInit {
  interval1: any;
  ileZostalo: number = 20;
  constructor(private router: Router, private route: ActivatedRoute,
    private callService: CallService, private spinner: NgxSpinnerService) { }

    ngOnInit() {
      let number = null;
      this.route.params.subscribe(params => { number = params.number; });
      this.callService.placeCall(number);

      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 26000);

      this.interval1 = setInterval(() => {
        if (this.ileZostalo > 0) {
          this.ileZostalo--;
        } else {
          this.callService.checkStatus();
          clearInterval(this.interval1);
        }
      }, 1000);

      this.callService.getCallStatus().subscribe(status => {
        if (this.callService.isConnected(status)) {
          this.router.navigate(['/panel/call']);
        } else if (this.callService.isBusy(status)) {
          this.router.navigate(['/panel/busy']);
        } else if (this.callService.isFailed(status)) {
          this.router.navigate(['/panel/failed']);
        }

    });
  }
}
