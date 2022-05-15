import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBetsViewComponent } from './my-bets-view.component';

describe('MyBetsViewComponent', () => {
  let component: MyBetsViewComponent;
  let fixture: ComponentFixture<MyBetsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBetsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
