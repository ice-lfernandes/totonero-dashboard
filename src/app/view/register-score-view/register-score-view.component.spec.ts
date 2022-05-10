import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScoreViewComponent } from './register-score-view.component';

describe('RegisterScoreViewComponent', () => {
  let component: RegisterScoreViewComponent;
  let fixture: ComponentFixture<RegisterScoreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScoreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
