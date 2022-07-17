import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosYourPokemonComponent } from './whos-your-pokemon.component';

describe('WhosYourPokemonComponent', () => {
  let component: WhosYourPokemonComponent;
  let fixture: ComponentFixture<WhosYourPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhosYourPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosYourPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
