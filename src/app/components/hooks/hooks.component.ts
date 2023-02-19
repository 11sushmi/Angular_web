import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/model';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent {
  data = 0;
  titlename = 'Lifecycle of Component';
  customer = new Customer(); // 10001
  name = '';
  code = 0;
  isChildMount = false;
  isTimerMount = false;

  constructor(private router: Router) {}

  updateCustomer() {
    this.customer = new Customer(); // 10002
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

  lifeCycleStages() {
    this.router.navigateByUrl('views/demo/nghooks');
  }

  onTimerClick() {
    this.isChildMount = false;
    this.isTimerMount = !this.isTimerMount;
  }
}
