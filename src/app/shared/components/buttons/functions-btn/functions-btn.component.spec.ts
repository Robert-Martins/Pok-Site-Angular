import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsBtnComponent } from './functions-btn.component';

describe('FunctionsBtnComponent', () => {
  let component: FunctionsBtnComponent;
  let fixture: ComponentFixture<FunctionsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionsBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
