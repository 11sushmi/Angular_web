import { Component } from '@angular/core';
import { Customer } from 'src/app/Models/model';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent {
  data = 0;
  message = '';
  customer = new Customer(); // 10001
  name = '';
  code = 0;
  isChildMount = false;

  updateCustomer() {
    this.customer = new Customer(); // 10002
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
}
