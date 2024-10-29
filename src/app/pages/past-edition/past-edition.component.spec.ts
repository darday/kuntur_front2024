import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEditionComponent } from './past-edition.component';

describe('PastEditionComponent', () => {
  let component: PastEditionComponent;
  let fixture: ComponentFixture<PastEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastEditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
