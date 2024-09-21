import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoFiccionComponent } from './largo-ficcion.component';

describe('LargoFiccionComponent', () => {
  let component: LargoFiccionComponent;
  let fixture: ComponentFixture<LargoFiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargoFiccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
