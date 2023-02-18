import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css'],
})
export class LifecyclehooksComponent implements OnChanges, DoCheck {
  @Input() message!: string;
  @Input() customer!: any;
  changelog: string[] = [];

  firstname = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);

    for (const propName in changes) {
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: changed from ${from?.toUpperCase()} to ${to?.toUpperCase()} `;
      this.changelog.push(changeLog);
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    console.log(this.customer);
    //console.log('I am from ngDoCheck() and my order::::' + this.order);
  }
}
