import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoDocumentalComponent } from './largo-documental.component';

describe('LargoDocumentalComponent', () => {
  let component: LargoDocumentalComponent;
  let fixture: ComponentFixture<LargoDocumentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargoDocumentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoDocumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
