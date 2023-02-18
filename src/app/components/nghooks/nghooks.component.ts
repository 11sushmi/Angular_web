import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-nghooks',
  templateUrl: './nghooks.component.html',
  styleUrls: ['./nghooks.component.css'],
})
export class NghooksComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  lifecycle: string[] = [];
  order = 1;
  @Input() message: any;
  constructor() {
    alert("Hey I'm constructor()");
    console.log(
      '%cI am from constructor()!! and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from constructor()!!');
  }

  ngOnChanges() {
    alert("Hey I'm ngOnChanges()");
    console.log(
      '%cI am from ngOnChanges()!! and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngOnChanges()!!');
  }

  ngOnInit() {
    alert("Hey I'm ngOnInit()");
    console.log(
      '%cI am from ngOnInit() and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngOnInit()!!');
  }

  ngDoCheck() {
    alert("Hey I'm ngDoCheck()");
    console.log(
      '%cI am from ngDoCheck() and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngDoCheck()!!');
  }

  ngAfterContentInit() {
    alert("Hey I'm ngAfterContentInit()");
    console.log(
      '%cI am from ngAfterContentInit() and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngAfterContentInit()!!');
  }

  ngAfterContentChecked() {
    alert("Hey I'm ngAfterContentChecked()");
    console.log(
      '%cI am from ngAfterContentChecked() and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngAfterContentChecked()!!');
  }

  ngAfterViewInit() {
    alert("Hey I'm ngAfterViewInit()");
    console.log(
      '%cI am from ngAfterViewInit() and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngAfterViewInit()!!');
  }

  ngAfterViewChecked() {
    alert("Hey I'm ngAfterViewChecked()");
    console.log(
      '%cI am from ngAfterViewChecked() and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngAfterViewChecked()!!');
  }

  ngOnDestroy() {
    alert("Hey I'm ngOnDestroy()");
    console.log(
      '%cI am from ngOnDestroy() and my order::::' + this.order,
      'color: cyan'
    );
    this.order++;
    this.lifecycle.push('I am from ngOnDestroy()!!');
  }
}
