import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentB } from './component-b.component';

describe('ComponentBComponent', () => {
  let component: ComponentB;
  let fixture: ComponentFixture<ComponentB>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentB ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
