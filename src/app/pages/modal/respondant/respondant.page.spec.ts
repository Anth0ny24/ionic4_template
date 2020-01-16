import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondantPage } from './respondant.page';

describe('RespondantPage', () => {
  let component: RespondantPage;
  let fixture: ComponentFixture<RespondantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
