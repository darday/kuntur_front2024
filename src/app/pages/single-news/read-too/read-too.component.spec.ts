import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTooComponent } from './read-too.component';

describe('ReadTooComponent', () => {
  let component: ReadTooComponent;
  let fixture: ComponentFixture<ReadTooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadTooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
