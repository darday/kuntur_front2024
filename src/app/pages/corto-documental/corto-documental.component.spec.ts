import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoDocumentalComponent } from './corto-documental.component';

describe('CortoDocumentalComponent', () => {
  let component: CortoDocumentalComponent;
  let fixture: ComponentFixture<CortoDocumentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortoDocumentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortoDocumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
