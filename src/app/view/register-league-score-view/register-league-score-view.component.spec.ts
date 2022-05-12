import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLeagueScoreViewComponent } from './register-league-score-view.component';

describe('RegisterLeagueScoreViewComponent', () => {
  let component: RegisterLeagueScoreViewComponent;
  let fixture: ComponentFixture<RegisterLeagueScoreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLeagueScoreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLeagueScoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
