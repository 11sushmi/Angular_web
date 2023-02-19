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
  message = '';
  customer = new Customer(); // 10001
  name = '';
  code = 0;
  isChildMount = false;
  isTimerMount = false;
  showNgOnChangeDemo = false;

  constructor(private router: Router) {}

  updateCustomer() {
    this.customer = new Customer(); // 10002
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

  lifeCycleStages() {
    this.isTimerMount = false;
    this.showNgOnChangeDemo = false;
    this.isChildMount = !this.isChildMount;
  }

  onTimerClick() {
    this.isChildMount = false;
    this.showNgOnChangeDemo = false;
    this.isTimerMount = !this.isTimerMount;
  }

  onDemoClick() {
    this.isChildMount = false;
    this.isTimerMount = false;
    this.showNgOnChangeDemo = !this.showNgOnChangeDemo;
  }
}
