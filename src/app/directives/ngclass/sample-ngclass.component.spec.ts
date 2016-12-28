/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleNgclassComponent } from './sample-ngclass.component';

describe('SampleNgclassComponent', () => {
  let component: SampleNgclassComponent;
  let fixture: ComponentFixture<SampleNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
