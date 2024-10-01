import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoFiccionComponent } from './corto-ficcion.component';

describe('CortoFiccionComponent', () => {
  let component: CortoFiccionComponent;
  let fixture: ComponentFixture<CortoFiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortoFiccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortoFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
