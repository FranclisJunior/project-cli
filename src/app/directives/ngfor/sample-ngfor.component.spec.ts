import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleNgforComponent } from './sample-ngfor.component';

describe('SampleNgforComponent', () => {
  let component: SampleNgforComponent;
  let fixture: ComponentFixture<SampleNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
