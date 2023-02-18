import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnInitOnDestroyComponent } from './ng-on-init-on-destroy.component';

describe('NgOnInitOnDestroyComponent', () => {
  let component: NgOnInitOnDestroyComponent;
  let fixture: ComponentFixture<NgOnInitOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnInitOnDestroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnInitOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
