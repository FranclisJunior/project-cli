/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleNgifComponent } from './sample-ngif.component';

describe('SampleNgifComponent', () => {
  let component: SampleNgifComponent;
  let fixture: ComponentFixture<SampleNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
