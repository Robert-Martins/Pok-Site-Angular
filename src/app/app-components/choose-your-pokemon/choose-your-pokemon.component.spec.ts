import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourPokemonComponent } from './choose-your-pokemon.component';

describe('ChooseYourPokemonComponent', () => {
  let component: ChooseYourPokemonComponent;
  let fixture: ComponentFixture<ChooseYourPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseYourPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
