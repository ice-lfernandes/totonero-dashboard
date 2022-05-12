import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTeamScoreViewComponent } from './register-team-score-view.component';

describe('RegisterTeamScoreViewComponent', () => {
  let component: RegisterTeamScoreViewComponent;
  let fixture: ComponentFixture<RegisterTeamScoreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTeamScoreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTeamScoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
