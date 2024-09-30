import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficialSelectionComponent } from './oficial-selection.component';

describe('OficialSelectionComponent', () => {
  let component: OficialSelectionComponent;
  let fixture: ComponentFixture<OficialSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OficialSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficialSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
