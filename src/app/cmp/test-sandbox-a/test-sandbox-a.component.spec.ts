import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSandboxAComponent } from './test-sandbox-a.component';

describe('TestSandboxAComponent', () => {
  let component: TestSandboxAComponent;
  let fixture: ComponentFixture<TestSandboxAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSandboxAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSandboxAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
