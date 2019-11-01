import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInputBComponent } from './api-input-b.component';

describe('ApiInputBComponent', () => {
  let component: ApiInputBComponent;
  let fixture: ComponentFixture<ApiInputBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiInputBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiInputBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
