import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsForDownloadComponent } from './buttons-for-download.component';

describe('ButtonsForDownloadComponent', () => {
  let component: ButtonsForDownloadComponent;
  let fixture: ComponentFixture<ButtonsForDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsForDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsForDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
