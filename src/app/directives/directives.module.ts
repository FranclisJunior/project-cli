import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleNgifComponent } from './ngif/sample-ngif.component';
import { SamplegswitchComponent } from './ngswitch/sample-ngswitch.component';
import { SampleNgforComponent } from './ngfor/sample-ngfor.component';
import { SampleNgclassComponent } from './ngclass/sample-ngclass.component';
import { SampleNgstyleComponent } from './ngstyle/sample-ngstyle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleNgifComponent,
    SamplegswitchComponent,
    SampleNgforComponent,
    SampleNgclassComponent,
    SampleNgstyleComponent
  ],
  exports: [
    SampleNgifComponent,
    SamplegswitchComponent,
    SampleNgforComponent,
    SampleNgclassComponent,
    SampleNgstyleComponent
  ]
})
export class DirectivesModule { }
