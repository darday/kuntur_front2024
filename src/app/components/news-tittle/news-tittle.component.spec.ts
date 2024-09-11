import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTittleComponent } from './news-tittle.component';

describe('NewsTittleComponent', () => {
  let component: NewsTittleComponent;
  let fixture: ComponentFixture<NewsTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTittleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
