import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBlackListViewComponent } from './register-black-list-view.component';

describe('RegisterBlackListViewComponent', () => {
  let component: RegisterBlackListViewComponent;
  let fixture: ComponentFixture<RegisterBlackListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBlackListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBlackListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
