import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScoreStatsViewComponent } from './my-score-stats-view.component';

describe('MyScoreStatsViewComponent', () => {
  let component: MyScoreStatsViewComponent;
  let fixture: ComponentFixture<MyScoreStatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyScoreStatsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScoreStatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
