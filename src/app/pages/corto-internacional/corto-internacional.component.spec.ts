import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoInternacionalComponent } from './corto-internacional.component';

describe('CortoInternacionalComponent', () => {
  let component: CortoInternacionalComponent;
  let fixture: ComponentFixture<CortoInternacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortoInternacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortoInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
