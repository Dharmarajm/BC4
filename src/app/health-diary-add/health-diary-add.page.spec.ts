import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDiaryAddPage } from './health-diary-add.page';

describe('HealthDiaryAddPage', () => {
  let component: HealthDiaryAddPage;
  let fixture: ComponentFixture<HealthDiaryAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDiaryAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDiaryAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
