import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsForFilmsComponent } from './buttons-for-films.component';

describe('ButtonsForFilmsComponent', () => {
  let component: ButtonsForFilmsComponent;
  let fixture: ComponentFixture<ButtonsForFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsForFilmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsForFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
