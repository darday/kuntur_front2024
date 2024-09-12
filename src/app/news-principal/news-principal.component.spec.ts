import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPrincipalComponent } from './news-principal.component';

describe('NewsPrincipalComponent', () => {
  let component: NewsPrincipalComponent;
  let fixture: ComponentFixture<NewsPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
