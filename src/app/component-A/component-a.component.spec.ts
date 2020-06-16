import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentA } from './component-a.component';

describe('ComponentAComponent', () => {
  let component: ComponentA;
  let fixture: ComponentFixture<ComponentA>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
