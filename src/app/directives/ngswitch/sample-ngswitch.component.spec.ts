/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SamplegswitchComponent } from './sample-ngswitch.component';

describe('SamplegswitchComponent', () => {
  let component: SamplegswitchComponent;
  let fixture: ComponentFixture<SamplegswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplegswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplegswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
