import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBetsViewComponent } from './register-bets-view.component';

describe('RegisterBetsViewComponent', () => {
  let component: RegisterBetsViewComponent;
  let fixture: ComponentFixture<RegisterBetsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBetsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
