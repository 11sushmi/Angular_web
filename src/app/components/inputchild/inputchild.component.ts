import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.css'],
})
export class InputchildComponent {
  @Input() parentData: any;
}
