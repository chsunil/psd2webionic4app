import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedetailsPage } from './pagedetails.page';

describe('PagedetailsPage', () => {
  let component: PagedetailsPage;
  let fixture: ComponentFixture<PagedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
