import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScoreBasicViewComponent } from './register-score-basic-view.component';

describe('RegisterScoreBasicViewComponent', () => {
  let component: RegisterScoreBasicViewComponent;
  let fixture: ComponentFixture<RegisterScoreBasicViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScoreBasicViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScoreBasicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
