import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTeamComponent } from './logo-team.component';

describe('LogoTeamComponent', () => {
  let component: LogoTeamComponent;
  let fixture: ComponentFixture<LogoTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
