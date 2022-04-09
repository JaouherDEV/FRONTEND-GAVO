import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUserComponent } from './ui-user.component';

describe('UiUserComponent', () => {
  let component: UiUserComponent;
  let fixture: ComponentFixture<UiUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
