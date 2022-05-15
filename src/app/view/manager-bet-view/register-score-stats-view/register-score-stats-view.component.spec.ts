import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScoreStatsViewComponent } from './register-score-stats-view.component';

describe('RegisterScoreStatsViewComponent', () => {
  let component: RegisterScoreStatsViewComponent;
  let fixture: ComponentFixture<RegisterScoreStatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScoreStatsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScoreStatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
