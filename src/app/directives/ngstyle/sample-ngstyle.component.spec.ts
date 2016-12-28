/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleNgstyleComponent } from './sample-ngstyle.component';

describe('SampleNgstyleComponent', () => {
  let component: SampleNgstyleComponent;
  let fixture: ComponentFixture<SampleNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
