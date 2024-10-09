import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaFestivalComponent } from './acerca-festival.component';

describe('AcercaFestivalComponent', () => {
  let component: AcercaFestivalComponent;
  let fixture: ComponentFixture<AcercaFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaFestivalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
