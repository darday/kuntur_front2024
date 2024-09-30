import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortometrajesComponent } from './cortometrajes.component';

describe('CortometrajesComponent', () => {
  let component: CortometrajesComponent;
  let fixture: ComponentFixture<CortometrajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortometrajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortometrajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
