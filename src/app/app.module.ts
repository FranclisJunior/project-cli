import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';
import { SampleNgifComponent } from './directives/ngif/sample-ngif.component';
import { SamplegswitchComponent } from './directives/ngswitch/sample-ngswitch.component';
import { SampleNgforComponent } from './directives/ngfor/sample-ngfor.component';
import { SampleNgclassComponent } from './directives/ngclass/sample-ngclass.component';
import { SampleNgstyleComponent } from './directives/ngstyle/sample-ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleNgifComponent,
    SamplegswitchComponent,
    SampleNgforComponent,
    SampleNgclassComponent,
    SampleNgstyleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
