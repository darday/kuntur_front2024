import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoUnivFiccionComponent } from './corto-univ-ficcion.component';

describe('CortoUnivFiccionComponent', () => {
  let component: CortoUnivFiccionComponent;
  let fixture: ComponentFixture<CortoUnivFiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortoUnivFiccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortoUnivFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
