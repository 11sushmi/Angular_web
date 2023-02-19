import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  message = '';
  isChildVisible = false;

  sendDataToChild() {
    if (this.message === '') return alert('Please type few words');
    this.isChildVisible = !this.isChildVisible;
  }
}
