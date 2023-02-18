import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghooksComponent } from './nghooks.component';

describe('NghooksComponent', () => {
  let component: NghooksComponent;
  let fixture: ComponentFixture<NghooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NghooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
