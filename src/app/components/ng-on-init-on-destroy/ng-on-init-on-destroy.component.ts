import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init-on-destroy',
  templateUrl: './ng-on-init-on-destroy.component.html',
  styleUrls: ['./ng-on-init-on-destroy.component.css'],
})
export class NgOnInitOnDestroyComponent implements OnInit, OnDestroy {
  constructor() {}

  timer: any;
  arr: string[] = [];
  clearInterval: any;

  ngOnInit(): void {
    console.log('ngOnInit : Child Mounted');
    this.arr.push('ngOnInit : Child Mounted');
    this.clearInterval = setInterval(() => {
      let date = new Date();
      this.arr.push(date.toLocaleString());
      console.log(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy : Child Unmounted');
    this.arr.push('ngOnDestroy : Child Unmounted');
    clearInterval(this.clearInterval);
  }
}
