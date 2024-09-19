import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaWithoutImgComponent } from './cronograma-without-img.component';

describe('CronogramaWithoutImgComponent', () => {
  let component: CronogramaWithoutImgComponent;
  let fixture: ComponentFixture<CronogramaWithoutImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronogramaWithoutImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaWithoutImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
