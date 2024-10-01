import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoUnivDocumentalComponent } from './corto-univ-documental.component';

describe('CortoUnivDocumentalComponent', () => {
  let component: CortoUnivDocumentalComponent;
  let fixture: ComponentFixture<CortoUnivDocumentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortoUnivDocumentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortoUnivDocumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
