import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildYourTeamComponent } from './build-your-team.component';

describe('BuildYourTeamComponent', () => {
  let component: BuildYourTeamComponent;
  let fixture: ComponentFixture<BuildYourTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildYourTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildYourTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
