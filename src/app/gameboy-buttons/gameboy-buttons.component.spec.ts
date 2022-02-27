import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboyButtonsComponent } from './gameboy-buttons.component';

describe('GameboyButtonsComponent', () => {
  let component: GameboyButtonsComponent;
  let fixture: ComponentFixture<GameboyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameboyButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
